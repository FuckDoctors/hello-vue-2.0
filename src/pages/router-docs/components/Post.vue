<template>
  <div id="router-dynamic-post">
    <p>Post: {{ $route.params.postName }}, Author: {{ $route.params.username }}</p>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'router-dynamic-post',
};
</script>

<style type="text/css">

</style>
