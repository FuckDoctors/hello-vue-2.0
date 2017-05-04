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
