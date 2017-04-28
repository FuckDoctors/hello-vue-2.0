<template>
  <div id="vuex-form">
    <input type="text" v-model="message">
    Message in Vuex:{{message}}
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'vuex-form',
  computed: {
    message: {
      get() {
        return this.$store.state.msgObj.message;
      },
      set(value) {
        this.$store.commit('updateMessage', value);
      },
    },
  },
};
</script>

<style type="text/css">

</style>
