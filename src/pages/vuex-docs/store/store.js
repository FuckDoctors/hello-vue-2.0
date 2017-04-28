import Vue from 'vue';
import Vuex from 'vuex';

import { SOME_MUTATION } from '../types/mutation-types';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0,
    hello: 'hello',
    todos: [
      {
        id: 1,
        text: 'todo1',
        done: false,
      }, {
        id: 2,
        text: 'todo2',
        done: false,
      },
    ],
    msgObj: {
      message: 'Message from Vuex.',
    },
  },
  mutations: {
    increment: (state) => { state.count += 1; },
    decrement: (state) => { state.count -= 1; },
    incrementByStep(state, step) {
      state.count += step;
    },
    decrementByStep(state, payload) {
      state.count -= payload.step;
    },
    [SOME_MUTATION](state) {
      state.hello = state.count;
    },
    updateMessage(state, msg) {
      console.log(msg);
      state.msgObj.message = msg;
    },
  },
  getters: {
    // Arrow_functions
    // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions
    doneTodos: state => state.todos.filter(todo => todo.done),
    doneTodosCount: (state, getters) => getters.doneTodos.length,
  },
  actions: {
    increment(context) {
      context.commit('increment');
    },
    decrement({ commit }) {
      commit('decrement');
    },
    incrementByStep({ commit, state }, step) {
      commit('incrementByStep', step);
    },
    decrementByStep({ commit, state }, payload) {
      commit({
        type: 'decrementByStep',
        step: payload.step,
      });
    },
  },
});

export default store;
