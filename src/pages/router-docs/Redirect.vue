<template>
  <div id="router-redirect">
    <p>下面的link使用的是绝对路径，使用相对路径不对，跳转后url地址变了，还是相对路径的话就不对了。</p>
    <router-link to="/router/redirect/a">a</router-link>
    <router-link to="/router/redirect/b">b</router-link>
    <router-link to="/router/redirect/c">c</router-link>
    <router-link to="/h">c的别名/h</router-link>
    <router-view></router-view>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'router-redirect',
};
</script>

<style type="text/css">

</style>
