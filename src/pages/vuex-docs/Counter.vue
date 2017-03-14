<template>
  <div id="vuex-counter">
    <p>{{count}}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>
  </div>
</template>

<script type="text/javascript">
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0,
  },
  mutations: {
    // 下面copy state重新返回的方式不正确，count一直为0.
    /*
    increment: (state) => {
      const newState = Object.assign({}, state);
      newState.count += 1;
      return newState;
    },
    decrement: (state) => {
      const newState = Object.assign({}, state);
      newState.count -= 1;
      return newState;
    },
    */
    /*
      no-return-assign
      https://github.com/eslint/eslint/issues/5150
      no-param-reassign
      http://eslint.org/docs/rules/no-param-reassign.html
      老报错，更改了ESLint的规则：
      http://stackoverflow.com/questions/35637770/how-to-avoid-no-param-reassign-when-setting-a-property-on-a-dom-object
    */
    increment: (state) => { state.count += 1; },
    decrement: (state) => { state.count -= 1; },
  },
});

export default {
  name: 'vuex-counter',
  computed: {
    count() {
      return store.state.count;
    },
  },
  methods: {
    increment() {
      store.commit('increment');
    },
    decrement() {
      store.commit('decrement');
    },
  },
};
</script>

<style type="text/css">

</style>
