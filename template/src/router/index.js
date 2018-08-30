import Vue from 'vue';
import Router from 'vue-router';
import Hello from '../page/Hello';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      {{#githubPage}}
      path: '/{{githubProjectName}}',
      {{else}}
      path: '/',
      {{/githubPage}}
      name: 'Hello',
      component: Hello
    }
  ]
});
