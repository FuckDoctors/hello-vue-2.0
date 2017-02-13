<template>
  <div id="guide-todo-item2">
    <li :class="{finished: finished}" @click="toggle">{{title}}</li>
    <button v-on:click="remove">X</button>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'todo-item2',
  props: ['title', 'index'],
  data() {
    return {
      finished: false,
    };
  },
  methods: {
    toggle() {
      this.finished = !this.finished;
    },
    remove() {
      console.log('removing request from child');
      this.$emit('remove');
    },
  },
};
</script>

<style type="text/css" scoped>
li {
  cursor: pointer;
}
.finished {
  color:gray;
  text-decoration:line-through;
}
</style>
