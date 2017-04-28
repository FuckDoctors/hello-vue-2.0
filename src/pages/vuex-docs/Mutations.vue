<template>
  <div id="vuex-mutations">
    <p>{{count}}</p>
    <p>
      Step:<input type="text" v-model.number="step">
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
      <br />
      <button @click="sayHello">hello</button>
    </p>
    <p>使用Payload</p>
    <div class="notice">一条重要的原则就是要记住 mutation 必须是同步函数。在 Vuex 中，mutation 都是同步事务。</div>
    <p>Mutations Types:{{hello}}</p>
  </div>
</template>

<script type="text/javascript">
import { SOME_MUTATION } from './types/mutation-types';

export default {
  name: 'vuex-mutations',
  data() {
    return {
      step: 2,
    };
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
    hello() {
      return this.$store.state.hello;
    },
  },
  methods: {
    increment() {
      // 当在页面上修改了step的值，此时再按+的话就成字符串拼接了。。。
      // 解决方法：使用v-model.number
      this.$store.commit('incrementByStep', this.step);
    },
    decrement() {
      const self = this;
      this.$store.commit({
        type: 'decrementByStep',
        step: self.step,
      });
    },
    sayHello() {
      console.log(SOME_MUTATION);
      this.$store.commit(SOME_MUTATION);
    },
  },
};
</script>

<style type="text/css">

</style>
