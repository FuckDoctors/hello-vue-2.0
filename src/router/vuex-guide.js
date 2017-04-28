import VuexIndex from 'pages/vuex-docs/Index';
import VuexCounter from 'pages/vuex-docs/Counter';
import Counter2 from 'pages/vuex-docs/Counter2';
import Getters from 'pages/vuex-docs/Getters';
import Mutations from 'pages/vuex-docs/Mutations';
import Actions from 'pages/vuex-docs/Actions';
import Modules from 'pages/vuex-docs/Modules';
import Form from 'pages/vuex-docs/Form';

/* 单独做个文件用来管理Guide练习页面的路由 */
const routes = [
  {
    path: '/vuex/',
    name: 'VuexIndex',
    component: VuexIndex,
  }, {
    path: '/vuex/counter',
    name: 'VuexCounter',
    component: VuexCounter,
  }, {
    path: '/vuex/counter2',
    name: 'Counter2',
    component: Counter2,
  }, {
    path: '/vuex/getters',
    name: 'Getters',
    component: Getters,
  }, {
    path: '/vuex/mutations',
    name: 'Mutations',
    component: Mutations,
  }, {
    path: '/vuex/actions',
    name: 'Actions',
    component: Actions,
  }, {
    path: '/vuex/modules',
    name: 'Modules',
    component: Modules,
  }, {
    path: '/vuex/form',
    name: 'Form',
    component: Form,
  },
];

export default routes;
