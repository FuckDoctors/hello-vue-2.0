<template>
  <div id="guide-filter">
    <p>首字母大写：{{message | capitalize}}</p>
    <input type="text" name="msg" v-model="message">
    <!-- 这里的'￥'会作为过滤器的第二个参数 -->
    <p>金额（简单功能无验证）：{{money | formatMoney('￥')}}</p>
    <input type="number" name="money" v-model="money">
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'guide-filter',
  data() {
    return {
      message: 'abc',
      money: 0,
    };
  },
  filters: {
    capitalize(value) {
      if (!value) {
        return '';
      }
      const val = value.toString();
      return val.charAt(0).toUpperCase() + val.slice(1);
    },
    formatMoney(value, unit) {
      // https://cn.vuejs.org/v2/guide/syntax.html#过滤器
      const money = Number.parseFloat(value);
      return `${unit}${money.toFixed(2)}`;
    },
  },
};
</script>

<style type="text/css">

</style>
