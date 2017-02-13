<template>
  <div id="guide-computed">
    <p>Original message: {{msg}}</p>
    <p>computed reversed message: {{reversedMsg}}</p>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'guide-computed',
  data() {
    return {
      msg: 'hello',
    };
  },
  computed: {
    // a computed getter
    reversedMsg() {
      // `this` points to the vm instance
      return this.msg.split('').reverse().join('');
    },
  },
};
</script>

<style type="text/css">

</style>
