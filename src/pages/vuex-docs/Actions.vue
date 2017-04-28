<template>
  <div id="vuex-actions">
    <h2>Action 类似于 mutation，不同在于</h2>
    <ol>
      <li>Action 提交的是 mutation，而不是直接变更状态。</li>
      <li>Action 可以包含任意异步操作。</li>
    </ol>

    <p>{{count}}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>
    <p>Step:<input type="text" v-model.number="step"></p>
    <p>
      <button @click="incrementByStep">+</button>
      <button @click="decrementByStep">-</button>
    </p>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'vuex-actions',
  data() {
    return {
      step: 2,
    };
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
  },
  methods: {
    increment() {
      this.$store.dispatch('increment');
    },
    decrement() {
      this.$store.dispatch('decrement');
    },
    incrementByStep() {
      this.$store.dispatch('incrementByStep', this.step);
    },
    decrementByStep() {
      this.$store.dispatch({
        type: 'decrementByStep',
        step: this.step,
      });
    },
  },
};
</script>

<style type="text/css">

</style>
