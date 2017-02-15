<template>
  <div id="guide-currency-input">
    <input type="text" ref="input" v-bind:value="value" v-on:input="updateValue($event.target.value)">
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'guide-currency-input',
  props: ['value'],
  methods: {
    // 不是直接更新值，而是使用此方法来对输入值进行格式化和位数限制
    updateValue(value) {
      const formattedValue = value
        // 删除两侧空格
        .trim()
        // 保留 2 小数位
        .slice(0, value.indexOf('.') + 3);
      console.log(`formattedValue:${formattedValue},input.value:${this.$refs.input.value}`);
      // 如果值不统一，手动覆盖以保持一致
      if (formattedValue !== value) {
        this.$refs.input.value = formattedValue;
      }
      // 通过 input 事件发出数值
      this.$emit('input', Number(formattedValue));
    },
  },
};
</script>

<style type="text/css">

</style>
