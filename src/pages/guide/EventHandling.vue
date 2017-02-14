<template>
  <div id="guide-event">
    <h4>可以用 v-on 指令监听 DOM 事件来触发一些 JavaScript 代码。</h4>
    <button @click="counter++">+1</button>
    <p>这个按钮被点击了{{counter}}次。</p>
    <h4>内联Javascript语句</h4>
    <button @click="say('hi')">Say Hi</button>
    <button @click="say('what')">Say What</button>
    <form v-on:submit.prevent="onSubmit">
      <h4>有时也需要在内联语句处理器中访问原生 DOM 事件。可以用特殊变量 $event 把它传入方法：</h4>
      <button type="submit" @click="warn('Form cannot be submitted yet.', $event)">Submit</button>
    </form>
    <h4>事件修饰符</h4>
    <div v-on:click.self="doThat">
      <p>.self:只当事件在该元素本身（而不是子元素）触发时触发回调</p>
      <a href="/guide" v-on:click.stop="doThis">阻止单击事件冒泡</a>
      <a href="/guide" v-on:click.stop.prevent="doThis">修饰符可以串联</a>
      <button v-on:click.once="doThis">只能触发一次</button>
    </div>
    <h4>按键修饰符</h4>
    <p>记住所有的 keyCode 比较困难，所以 Vue 为最常用的按键提供了别名：</p>
    <input type="text" name="test" v-on:keyup.enter="onSubmit">
    <p>缩写语法</p>
    <input type="text" name="test" @keyup.enter="onSubmit">
    <p>可以通过全局 config.keyCodes 对象自定义按键修饰符别名：Vue.config.keyCodes.f1 = 112</p>
    <div @click.ctrl.prevent="doThat">试试点击和按住Ctrl键点击（Mac下的chrome按键冲突，不起作用？）</div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'guide-event',
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    say(something) {
      alert(something);
    },
    warn(something, event) {
      // 现在我们可以访问原生事件对象
      if (event) {
        event.preventDefault();
      }
      alert(something);
    },
    doThis() {
      alert('doThist...');
    },
    doThat() {
      alert('doThat');
    },
    onSubmit() {
      alert('onSubmit');
    },
  },
};
</script>

<style type="text/css">

</style>
