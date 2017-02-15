<template>
  <button @click="increment">{{counter}}</button>
</template>

<script type="text/javascript">
export default {
  name: 'guide-button-counter',
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    increment() {
      this.counter += 1;
      this.$emit('increment');
    },
  },
};
</script>

<style type="text/css">

</style>
