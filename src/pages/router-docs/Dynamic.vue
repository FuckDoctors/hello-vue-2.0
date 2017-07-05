<template>
  <div id="router-dynamic">
    <p>User</p>
    <ul>
      <li><router-link to="/router/dynamic/user/zhao?group=admin" exact>Zhao</router-link></li>
      <li><router-link to="/router/dynamic/user/bin?group=user" exact>Bin</router-link></li>
    </ul>
    <p>Post</p>
    <ul>
      <li><router-link to="/router/dynamic/user/zhao/post/hello">hello</router-link></li>
      <li><router-link to="/router/dynamic/user/bin/post/world">world</router-link></li>
    </ul>
    <p>命名路由</p>
    <input type="text" v-model="group">
    <router-link :to="{ name: 'User', params: { username: 'User Name' }, query: { group: group } }">带参跳转User</router-link>
    <router-view></router-view>

    <div class="notice">
      <p>你可以在一个路由中设置多段『路径参数』，对应的值都会设置到 $route.params 中。</p>
      <p>除了 $route.params 外，$route 对象还提供了其它有用的信息，例如，$route.query（如果 URL 中有查询参数）、$route.hash 等等。</p>
      <p>你可以查看<a href="https://router.vuejs.org/zh-cn/api/route-object.html">API文档</a> 的详细说明。</p>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'router-dynamic',
  data() {
    return {
      group: 'xxx',
    };
  },
};
</script>

<style type="text/css">

</style>
