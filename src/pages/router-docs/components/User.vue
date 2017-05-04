<template>
  <div id="router-dynamic-user">
    <p>User: {{ $route.params.username }}, QueryString: {{ $route.query }}</p>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'router-dynamic-user',
  watch: {
    // To react to params changes in the same component, you can simply watch the $route object:
    // 下面两种方式均可以
    /*
    $route(curVal, oldVal) {
      // 对路由变化作出响应...
      console.log(oldVal);
      console.log(curVal);
    },
    */

    $route: 'routeChanged',
  },
  beforeRouteUpdate(to, from, next) {
    // Or, use the beforeRouteUpdate guard introduced in 2.2:
    // react to route changes...
    console.log('beforeRouteUpdate...');
    console.log(from);
    console.log(to);
    // don't forget to call next()
    next();
  },
  methods: {
    routeChanged(curVal, oldVal) {
      // 对路由变化作出响应...
      console.log(oldVal);
      console.log(curVal);
    },
  },
};
</script>

<style type="text/css">

</style>
