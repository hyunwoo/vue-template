import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '../page/HelloWorld';

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
      name: 'HelloWorld',
      component: HelloWorld,
    },
  ],
});
