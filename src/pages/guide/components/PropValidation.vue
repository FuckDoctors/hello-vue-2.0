<template>
  <div id="guide-prop-validation">
    <h5>Prop验证...</h5>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'guide-prop-validation',
  props: {
    // 基础类型检测 （`null` 意思是任何类型都可以）
    propA: Number,
    // 多种类型
    propB: [String, Number],
    // 必传且是字符串
    propC: {
      type: String,
      required: true,
    },
    // 数字，有默认值
    propD: {
      type: Number,
      default: 100,
    },
    // 数组／对象的默认值应当由一个工厂函数返回
    propE: {
      type: Object,
      default() {
        return {
          message: 'Hello',
        };
      },
    },
    // 自定义验证函数
    propF: {
      type: Number,
      validator(value) {
        return value > 10;
      },
    },
  },
};
</script>

<style type="text/css">

</style>
