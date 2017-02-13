<template>
  <div id="guide-render">
    <p v-bind:title="title">{{message}}</p>
    <input type="text" name="message" v-model="message" />
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'guide-render',
  data() {
    return {
      message: 'Hello',
      title: `Here is title ${new Date()}`,
    };
  },
};
</script>

<style type="text/css">

</style>
