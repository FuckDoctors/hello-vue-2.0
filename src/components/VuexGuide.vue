<template>
  <div id="vuex-app">
    <h1>Vuex 2.2 Guide</h1>
    <router-link to="/" exact>返回首页</router-link>
    <!-- 显示各个入口链接 -->
    <h3>↓点击下面的各个链接查看效果↓</h3>
    <ul>
      <li v-for="item in entry"><router-link v-bind:to="item.link" v-bind:exact="item.exact == true ? true : false">{{item.title}}</router-link></li>
    </ul>
    <hr style="width: 90%;border: none;height: 2px;border-top: 2px solid rgb(65, 184, 131);" />
    <router-view></router-view>
  </div>
</template>

<script type="text/javascript">
import store from 'pages/vuex-docs/store/store';

export default {
  name: 'vuex-app',
  store,
  data() {
    return {
      /* entry用来设置各个入口，需要配合router/vuex-guide.js里的routes */
      entry: [
        {
          title: 'Index',
          link: '/vuex/',
          exact: true, /* 这个链接只会在地址为 / 的时候被激活。参考资料：http://router.vuejs.org/zh-cn/api/router-link.html */
        }, {
          title: 'Counter',
          link: '/vuex/counter',
        }, {
          title: 'Counter2',
          link: '/vuex/counter2',
        }, {
          title: 'Getters',
          link: '/vuex/getters',
        }, {
          title: 'Mutations',
          link: '/vuex/mutations',
        }, {
          title: 'Actions',
          link: '/vuex/actions',
        }, {
          title: 'Modules',
          link: '/vuex/modules',
        }, {
          title: 'Form',
          link: '/vuex/form',
        },
      ],
    };
  },
};
</script>

<style type="text/css">
/*
  http://router.vuejs.org/zh-cn/api/router-link.html
  设置 链接激活时使用的 CSS 类名。默认值可以通过路由的构造选项 linkActiveClass 来全局配置。
*/
a.router-link-active {
  text-decoration: none;
  color:rgb(53, 73, 94);
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
