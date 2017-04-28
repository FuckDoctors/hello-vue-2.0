<template>
  <div id="vuex-getters">
    <h2>Done todos: {{doneTodosCount}}</h2>
    <ul>
      <li v-for="(todo, index) in todos" v-bind:class="{done: todo.done}" @click="toggle(index)">{{todo.text}}</li>
    </ul>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'vuex-getters',
  data() {
    return {
      todos: this.$store.state.todos,
    };
  },
  computed: {
    doneTodosCount() {
      // return this.$store.getters.doneTodos.length;
      return this.$store.getters.doneTodosCount;
    },
  },
  methods: {
    toggle(index) {
      console.log(`clicked ${index}`);
      this.$store.state.todos[index].done = !this.$store.state.todos[index].done;
    },
  },
};
</script>

<style type="text/css">
li {
  cursor: pointer;
}
.done {
  color:gray;
  text-decoration:line-through;
}
</style>
