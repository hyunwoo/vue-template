# hyunwoo/vue-template

A full-featured Webpack setup with hot-reload, lint-on-save, unit testing & css extraction, Vuex.

Fork from : [vuejs-template/webpack](https://github.com/vuejs-templates/webpack)


## Guide

- [For Vue 2.0](http://vuejs.org/guide/): general information about how to work with Vue, not specific to this template

## Usage

Default Usage
``` bash
$ npm install -g vue-cli
$ vue init hyunwoo/vue-template [my-project]
```

This is a project template for [vue-cli](https://github.com/vuejs/vue-cli). **It is recommended to use npm 3+ for a more efficient dependency tree.**

``` bash
$ npm install -g vue-cli
$ vue init hyunwoo/vue-tempalte my-project
$ cd my-project
$ npm install
$ npm run dev
```

The development server will run on port 8080 by default. If that port is already in use on your machine, the next free port will be used.


* Please refer to [./config/index.js](https://github.com/hyunwoo/vue-template/blob/develop/template/config/index.js) for port and cors configuration

## Upgrade Items

- Serve With Express
- Serve With Github Pages
- Pug Setup
- Sass Setup
- Documentation




## What's Included
- `npm start` , `npm run dev` : first-in-class development experience.
  - Webpack + `vue-loader` for single file Vue components.
  - State preserving hot-reload
  - State preserving compilation error overlay
  - Lint-on-save with ESLint
  - Source maps

- `npm run build`: Production ready build.
  - JavaScript minified with [UglifyJS v3](https://github.com/mishoo/UglifyJS2/tree/harmony).
  - HTML minified with [html-minifier](https://github.com/kangax/html-minifier).
  - CSS across all components extracted into a single file and minified with [cssnano](https://github.com/ben-eb/cssnano).
  - Static assets compiled with version hashes for efficient long-term caching, and an auto-generated production `index.html` with proper URLs to these generated assets.
  - Use `npm run build --report`to build with bundle size analytics.

- `npm run unit`: Unit tests run in PhantomJS with Karma + Mocha + karma-webpack.
  - Supports ES2015+ in test files.
  - Easy mocking.

- `npm run e2e`: End-to-end tests with [Nightwatch](http://nightwatchjs.org/).
  - Run tests in multiple browsers in parallel.
  - Works with one command out of the box:
    - Selenium and chromedriver dependencies automatically handled.
    - Automatically spawns the Selenium server.

- `npm run publish`: Start the service using Express
    - express launcher file :  ./build/publish.js

- `npm run github-deploy`: Start the service using Github Page

- `npm run generate-docs`: create documentation JSDOC , DOCMA or documentationjs
    if use DOCMA or documentationjs
     - `npm run serve-docs`: serve doc from page.


## Documentation
> DOCMA
> - `npm run generate-docs`
> - `npm run serve-docs` ( serve port : 9000 )

> JSDOC with minima
> - `npm run generate-docs`

> documentationjs 
> - `npm run generate-docs`
> - `npm run serve-docs`





* documentation setting files

    DOCMA : [./docma.json](https://github.com/hyunwoo/vue-template/blob/develop/template/docma.json)

    JSDOC : [./jsdoc.json](https://github.com/hyunwoo/vue-template/blob/develop/template/jsdoc.json)

    documentationjs : nothing.

## Future work
- JSDOC to Docs/md.
- JSDOC serve to github pages




### Fork It And Make Your Own

You can fork this repo to create your own boilerplate, and use it with `vue-cli`:

``` bash
vue init username/repo my-project
```
