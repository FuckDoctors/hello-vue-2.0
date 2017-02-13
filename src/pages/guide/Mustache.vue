<template>
  <div id="guide-mustache">
    <p>文本：{{msg}}</p>
    <p v-once>Once: {{msg}}</p>
    <input type="text" name="msg" v-model="msg">
    <h3>html</h3>
    <div>{{rawHtml}}</div>
    <div v-text="rawHtml"></div>
    <div v-html="rawHtml"></div>
    <h3>属性</h3>
    <div v-bind:id="'prefix-' + did"><input type="text" name="did" v-model="did"></div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'guide-mustache',
  data() {
    return {
      msg: '这是文本',
      rawHtml: '<span>html内容</span',
      did: 'did',
    };
  },
};
</script>

<style type="text/css">

</style>
