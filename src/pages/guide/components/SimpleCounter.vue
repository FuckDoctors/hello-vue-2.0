<template>
  <div>
    <button @click="counter++">{{counter}}</button>
  </div>
</template>

<script type="text/javascript">
// const data = {
//   counter: 0,
// };

export default {
  name: 'guide-simple-counter',
  data() {
    // return data; // 这种方式所有的组件示例会公用同一个data，导致所有的counter会相互影响。
    return {
      counter: 0,
    };
  },
};
</script>

<style type="text/css">

</style>
