import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '../components/HelloWorld';
import TestAdd from '../components/testadd';
import TestUpdate from '../components/testupdate';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/testadd',
      name: 'testadd',
      component: TestAdd,
    },
    {
      path: '/testupdate',
      name: 'testupdate',
      component: TestUpdate,
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
  ],
});
