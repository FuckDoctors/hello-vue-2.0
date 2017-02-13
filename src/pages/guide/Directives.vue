<template>
  <div id="guide-directive">
    <button v-on:click="toggle">显示/隐藏</button>
    <p v-if="seen">v-if</p>
    <p v-show="seen">v-show</p>
    <h3>Form</h3>
    <form v-on:submit.prevent="onSubmit">
      <input type="text" name="url" v-model="url" />
      <a v-bind:href="url">{{url}}</a>
      <button type="submit">submit</button>
    </form>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'guide-directive',
  data() {
    return {
      seen: true,
      url: 'http://www.baidu.com',
    };
  },
  methods: {
    toggle() {
      this.seen = !this.seen;
    },
    onSubmit() {
      console.log('prevented.');
    },
  },
};
</script>

<style type="text/css">

</style>
