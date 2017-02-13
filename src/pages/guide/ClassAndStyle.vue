<template>
  <div id="guide-style">
    <input type="checkbox" name="check" v-model="checked">选择
    <input type="checkbox" name="check" v-model="hasError">标记错误
    <div class="static" v-bind:class="{checked: checked, 'text-danger': hasError}">动态切换class</div>
    <div v-bind:class="staticClassObject">StaticClassObject</div>
    <div v-bind:class="classObject">ClassObject</div>
    <div v-bind:class="[checkedClass, hasErrorClass]">数组语法</div>
    <div v-bind:class="[{checked: checked}, hasErrorClass]">数组中使用对象</div>
    <my-component class="static" v-bind:class="{checked: checked, 'text-danger': hasError}"></my-component>
    <hr />
    <h3>style</h3>
    <!--
      v-bind:style 的对象语法十分直观——看着非常像 CSS ，其实它是一个 JavaScript 对象。
      CSS 属性名可以用驼峰式（camelCase）或短横分隔命名（kebab-case）
      因为是JavaScript对象，所以使用短横分隔命名时，要使用引号引起来。
      -->
    <div v-bind:style="{fontSize: `${staticFontSize}px`, 'font-weight': checkedFontWeight, color: errorColor}">对象语法</div>
    <div v-bind:style="styleObject">StyleObject</div>
    <div v-bind:style="[styleObject, {'font-style': 'italic'}]">数组用法</div>
    <div v-bind:style="{transform: 'rotate(15deg)'}">当 v-bind:style 使用需要特定前缀的 CSS 属性时，如 transform ，Vue.js 会自动侦测并添加相应的前缀。</div>
  </div>
</template>

<script type="text/javascript">
import Vue from 'vue';

Vue.component('my-component', {
  template: '<p class="foo bar">组件中使用class</p>',
});

export default {
  name: 'guide-style',
  data() {
    return {
      checked: false,
      hasError: false,
      staticClassObject: {
        checked: true,
        'text-danger': true,
      },
      checkedClass: 'checked',
      hasErrorClass: 'text-danger',
      staticFontSize: 24,
      checkedFontWeight: 'bold',
      errorColor: 'red',
      styleObject: {
        fontSize: '24px',
        color: 'red',
        'font-weight': 'bold',
      },
    };
  },
  computed: {
    // data里不能饮用data中定义的property？只能在computed里用？
    // 在上面用this.checked的话，会报错。
    classObject() {
      return {
        checked: this.checked,
        'text-danger': this.hasError,
      };
    },
  },
};
</script>

<style type="text/css">
.static {
  font-size: 24px;
}
.checked {
  font-weight: bold;
}
.text-danger {
  color: red;
}
</style>
