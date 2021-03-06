const path = require('path');
const fs = require('fs');

const {
  sortDependencies,
  installDependencies,
  runLintFix,
  printMessage,
} = require('./utils');

const pkg = require('./package.json');

const templateVersion = pkg.version;

// const { addTestAnswers } = require('./scenarios');

module.exports = {
  // metalsmith: {
  //   // When running tests for the template, this adds answers for the selected scenario
  //   before: addTestAnswers
  // },
  helpers: {
    if_or(v1, v2, options) {

      if (v1 || v2) {
        return options.fn(this);
      }

      return options.inverse(this);
    },
    template_version() {
      return templateVersion;
    },
  },

  prompts: {
    name: {
      type: 'string',
      required: true,
      message: 'Project name',
    },
    description: {
      type: 'string',
      required: false,
      message: 'Project description',
      default: 'A Vue.js project',
    },
    author: {
      type: 'string',
      message: 'Author',
    },
    build: {
      type: 'list',
      message: 'Vue build',
      choices: [
        {
          name: 'Runtime + Compiler: recommended for most users',
          value: 'standalone',
          short: 'standalone',
        },
        {
          name:
            'Runtime-only: about 6KB lighter min+gzip, but templates (or any Vue-specific HTML) are ONLY allowed in .vue files - render functions are required elsewhere',
          value: 'runtime',
          short: 'runtime',
        },
      ],
    },
    router: {
      type: 'confirm',
      message: 'Install vue-router? (recommend)',
    },
    lint: {
      type: 'confirm',
      message: 'Use ESLint to lint your code?',
    },
    lintConfig: {
      when: 'lint',
      type: 'list',
      message: 'Pick an ESLint preset',
      choices: [
        {
          name: 'Airbnb (https://github.com/airbnb/javascript)',
          value: 'airbnb',
          short: 'Airbnb',
        },
        {
          name: 'none (configure it yourself)',
          value: 'none',
          short: 'none',
        },
      ],
    },
    templateLang: {
      type: 'list',
      message: 'Pick an template language',
      choices: [
        {
          name: 'default HTML',
          value: 'html',
          short: 'html',
        },
        {
          name: 'PUG (https://pugjs.org/api/getting-started.html)',
          value: 'pug',
          short: 'pug',
        },
      ],
    },
    styleLang: {
      type: 'list',
      message: 'Pick an style language',
      choices: [
        {
          name: 'only css',
          value: 'css',
          short: 'css',
        },
        {
          name: 'sass',
          value: 'sass',
          short: 'sass',
        },
      ],
    },
    unit: {
      type: 'confirm',
      message: 'Set up unit tests',
    },
    runner: {
      when: 'unit',
      type: 'list',
      message: 'Pick a test runner',
      choices: [
        {
          name: 'Karma and Mocha',
          value: 'karma',
          short: 'karma',
        },
        {
          name: 'none (configure it yourself)',
          value: 'noTest',
          short: 'noTest',
        },
      ],
    },
    e2e: {
      type: 'confirm',
      message: 'Setup e2e tests with Nightwatch?',
    },
    documentation: {
      type: 'list',
      message: 'Pick a documentation tool',
      choices: [
        {
          name: 'JSDOC',
          value: 'jsdoc',
          short: 'jsdoc',
        },
        {
          name: 'documentationjs',
          value: 'documentationjs',
          short: 'documentationjs',
        },
        {
          name: 'Docma',
          value: 'docma',
          short: 'docma',
        },
        {
          name: 'No, i do not need a documentation module',
          value: false,
          short: 'no',
        },
      ],
    },
    githubPage: {
      type: 'confirm',
      message: 'Do you want to deploy on the github page?'
    },
    githubPageBranch: {
      when: 'githubPage',
      type: 'string',
      message: 'Branch name',
      default: 'gh-pages',
    },
    githubProjectName: {
      when: 'githubPage',
      type: 'string',
      message: 'What is the GitHub Project Name? \n' +
        '* Important: If this project is a user-wide github page, leave it blank. If not, please enter the name of the project.\n' +
        '1) {USERNAME}.github.io => BLANK,\n' +
        '2) {USERNAME}.github.io/{PROJECTNAME} => PROJECTNAME \n : ',
    },
    autoInstall: {
      type: 'list',
      message:
        'Should we run `npm install` for you after the project has been created? (recommended)',
      choices: [
        {
          name: 'Yes, use NPM',
          value: 'npm',
          short: 'npm',
        },
        {
          name: 'No, I will handle that myself',
          value: false,
          short: 'no',
        },
      ],
    },
  },
  filters: {
    '.eslintrc.js': 'lint',
    '.eslintignore': 'lint',
    'config/test.env.js': 'unit || e2e',
    'build/webpack.test.conf.js': 'unit && runner === \'karma\'',
    'test/unit/**/*': 'unit',
    'test/e2e/**/*': 'e2e',
    'src/router/**/*': 'router',
  },
  complete: function (data, { chalk }) {
    const green = chalk.green;

    sortDependencies(data, green);

    const cwd = path.join(process.cwd(), data.inPlace ? '' : data.destDirName);

    if (data.autoInstall) {
      installDependencies(cwd, data.autoInstall, green)
        .then(() => {
          return runLintFix(cwd, data, green);
        })
        .then(() => {
          printMessage(data, green);
        })
        .catch(e => {
          console.log(chalk.red('Error:'), e);
        });
    } else {
      printMessage(data, chalk);
    }
  },
};
