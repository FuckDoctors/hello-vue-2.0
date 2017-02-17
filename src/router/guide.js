import HelloGuide from 'pages/guide/Hello';
import GuideIndex from 'pages/guide/Index';

import DeclarativeRendering from 'pages/guide/DeclarativeRendering';
import ConditionalsAndLoops from 'pages/guide/ConditionalsAndLoops';
import Mustache from 'pages/guide/Mustache';
import Directives from 'pages/guide/Directives';
import Filter from 'pages/guide/Filter';
import Computed from 'pages/guide/Computed';
import ClassAndStyle from 'pages/guide/ClassAndStyle';
import EventHandling from 'pages/guide/EventHandling';
import Form from 'pages/guide/Form';
import Components from 'pages/guide/Components';
import Components2 from 'pages/guide/Components2';
import Components3 from 'pages/guide/Components3';

/* 单独做个文件用来管理Guide练习页面的路由 */
const routes = [
  {
    path: '/guide/',
    name: 'GuideIndex',
    component: GuideIndex,
  }, {
    path: '/guide/hello',
    name: 'HelloGuide',
    component: HelloGuide,
  }, {
    path: '/guide/render',
    name: 'DeclarativeRendering',
    component: DeclarativeRendering,
  }, {
    path: '/guide/conditionals',
    name: 'ConditionalsAndLoops',
    component: ConditionalsAndLoops,
  }, {
    path: '/guide/mustache',
    name: 'Mustache',
    component: Mustache,
  }, {
    path: '/guide/directives',
    name: 'Directives',
    component: Directives,
  }, {
    path: '/guide/filter',
    name: 'Filter',
    component: Filter,
  }, {
    path: '/guide/computed',
    name: 'Computed',
    component: Computed,
  }, {
    path: '/guide/style',
    name: 'ClassAndStyle',
    component: ClassAndStyle,
  }, {
    path: '/guide/event',
    name: 'EventHandling',
    component: EventHandling,
  }, {
    path: '/guide/form',
    name: 'Form',
    component: Form,
  }, {
    path: '/guide/component',
    name: 'Components',
    component: Components,
  }, {
    path: '/guide/component2',
    name: 'Components2',
    component: Components2,
  }, {
    path: '/guide/component3',
    name: 'Components3',
    component: Components3,
  },
];

export default routes;
