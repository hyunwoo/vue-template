import Vue from 'vue';
import Router from 'vue-router';
import Index from '../page/Index';

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
      name: 'Index',
      component: Index,
    },
  ],
});
