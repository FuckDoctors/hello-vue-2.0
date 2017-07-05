<template>
  <div id="router-redirect">
    <p>下面的link使用的是绝对路径/router/redirect/xxx，使用相对路径不对redirect/xxx，跳转后url地址变了，还是相对路径的话就不对了。</p>
    <router-link to="/router/redirect/a">a</router-link>
    <router-link to="/router/redirect/b">b</router-link>
    <router-link to="/router/redirect/c">c</router-link>
    <router-link to="/h">c的别名/h</router-link>
    <router-view></router-view>

    <div>
      <p>重定向也是通过 routes 配置来完成，下面例子是从 /a 重定向到 /b，重定向的目标也可以是一个命名的路由，甚至是一个方法，动态返回重定向目标。</p>
      <p>其它高级用法，请参考 <a href="https://github.com/vuejs/vue-router/blob/next/examples/redirect/app.js">例子</a></p>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'router-redirect',
};
</script>

<style type="text/css">

</style>
