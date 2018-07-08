import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '../page/HelloWorld';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      {{#githubPage}}
      {{#if_eq githubProjectName ""}}
      path: '/',
      {{else}}
      path: '/{{githubPage}}/',
      {{/if_eq}}
      {{else}}
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
  ],
});
