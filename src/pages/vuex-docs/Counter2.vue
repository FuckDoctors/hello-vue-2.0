<template>
  <div id="vuex-counter">
    <p>{{count}}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>
    <p>使用根Store</p>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'vuex-counter',
  computed: {
    count() {
      return this.$store.state.count;
    },
  },
  methods: {
    increment() {
      this.$store.commit('increment');
    },
    decrement() {
      this.$store.commit('decrement');
    },
  },
};
</script>

<style type="text/css">

</style>
