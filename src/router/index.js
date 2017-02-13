import Vue from 'vue';
import Router from 'vue-router';

import Hello from 'components/Hello';
import Guide from 'components/Guide';

import GuideRoutes from './guide';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    }, {
      path: '/guide',
      name: 'Guide',
      component: Guide,
      children: GuideRoutes,
    },
  ],
});
