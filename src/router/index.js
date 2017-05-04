import Vue from 'vue';
import Router from 'vue-router';

import Hello from 'components/Hello';
import Guide from 'components/Guide';
import VuexGuide from 'components/VuexGuide';
import RouterGuide from 'components/RouterGuide';

import GuideRoutes from './guide';
import VuexRoutes from './vuex-guide';
import RouterGuideRoutes from './router-guide';

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
    }, {
      path: '/vuex',
      name: 'VuexGuide',
      component: VuexGuide,
      children: VuexRoutes,
    }, {
      path: '/router',
      name: 'RouterGuide',
      component: RouterGuide,
      children: RouterGuideRoutes,
    },
  ],
});
