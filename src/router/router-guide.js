import RouterIndex from 'pages/router-docs/Index';
import Dynamic from 'pages/router-docs/Dynamic';
import User from 'pages/router-docs/components/User';
import Post from 'pages/router-docs/components/Post';
import NamedViews from 'pages/router-docs/NamedViews';
import Hello from 'pages/router-docs/Hello';
import Redirect from 'pages/router-docs/Redirect';
import NaviGuards from 'pages/router-docs/NaviGuards';
import DataFetching from 'pages/router-docs/DataFetching';
import FetchingAfterNavi from 'pages/router-docs/components/FetchingAfterNavi';
import FetchingBeforeNavi from 'pages/router-docs/components/FetchingBeforeNavi';

/* 单独做个文件用来管理Guide练习页面的路由 */
const routes = [
  {
    path: '/router/',
    name: 'RouterIndex',
    component: RouterIndex,
  }, {
    path: '/router/dynamic/',
    name: 'Dynamic',
    component: Dynamic,
    children: [
      // path前面以"/"开头的是绝对路径，没有"/"的是相对路径
      // https://github.com/vuejs/vue-router/blob/next/examples/nested-routes/app.js
      {
        path: 'user/:username',
        name: 'User',
        component: User,
      }, {
        path: 'user/:username/post/:postName',
        name: 'User',
        component: Post,
      },
    ],
  }, {
    path: 'named-views',
    name: 'NamedViews',
    component: NamedViews,
    children: [
      {
        path: '/',
        components: {
          default: Hello,
          a: User,
          b: Post,
        },
      },
    ],
  }, {
    path: 'redirect/',
    name: 'Redirect',
    component: Redirect,
    children: [
      {
        path: 'user/:username',
        // name: 'User', // 这里使用User的名的话，跟上面的User重复，会跳转到dynamic下的User。体现了优先级的问题。谁先出现，谁优先级高。
        name: 'redirect-user',
        component: User,
      }, {
        path: 'a',
        redirect: 'user/zhaobc',
      }, {
        path: 'b',
        redirect: {
          // name: 'User',
          name: 'redirect-user',
          query: {
            group: 'user',
          },
          params: {
            username: 'Bin',
          },
        },
      }, {
        path: 'c',
        component: Hello,
        alias: '/h',
      },
    ],
  }, {
    path: 'navi-guards/',
    name: 'NaviGuards',
    component: NaviGuards,
  }, {
    path: 'data-fetching/',
    name: 'DataFetching',
    component: DataFetching,
    children: [
      {
        path: 'after',
        name: 'FetchingAfterNavi',
        component: FetchingAfterNavi,
      }, {
        path: 'before',
        name: 'FetchingBeforeNavi',
        component: FetchingBeforeNavi,
      },
    ],
  },
];

export default routes;
