<template>
  <div id="guide-custom-input">
    <input type="text" v-bind:value="something" v-on:input="updateValue($event.target.value)">
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'guide-custom-input',
  props: ['value'],
  methods: {
    updateValue(value) {
      this.$emit('input', value);
    },
  },
};
</script>

<style type="text/css">

</style>
