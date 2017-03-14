import VuexIndex from 'pages/vuex-docs/Index';
import VuexCounter from 'pages/vuex-docs/Counter';

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
  },
];

export default routes;
