<template>
  <div id="guide-components">
    <h4>data必须是函数</h4>
    <div id="counter-container">
      <simple-counter></simple-counter>
      <simple-counter></simple-counter>
      <simple-counter></simple-counter>
    </div>
    <h4>构成组件</h4>
    <p>在 Vue.js 中，父子组件的关系可以总结为 props down, events up 。父组件通过 props 向下传递数据给子组件，子组件通过 events 给父组件发送消息。</p>
    <h4>使用Prop传递数据，动态Prop，可参考ConditionalsAndLoops和TodoItem2。</h4>
    <h4>字面量语法 VS 动态语法</h4>
    <div class="notice">因为它是一个字面 prop ，它的值以字符串 "1" 而不是以实际的数字传下去。如果想传递一个实际的 JavaScript 数字，需要使用 v-bind ，从而让它的值被当作 JavaScript 表达式计算。</div>
    <comp some-prop="1"></comp>
    <comp :some-prop="1"></comp>
    <div class="notice">HTML 特性不区分大小写。当使用非字符串模版时，prop的名字形式会从 camelCase 转为 kebab-case（短横线隔开）。</div>
    <h4>单向数据流</h4>
    <p>prop 是单向绑定的：当父组件的属性变化时，将传导给子组件，但是不会反过来。这是为了防止子组件无意修改了父组件的状态</p>
    <p>另外，每次父组件更新时，子组件的所有 prop 都会更新为最新值。这意味着你不应该在子组件内部改变 prop 。如果你这么做了，Vue 会在控制台给出警告。</p>
    <div class="notice">注意在 JavaScript 中对象和数组是引用类型，指向同一个内存空间，如果 prop 是一个对象或数组，在子组件内部改变它会影响父组件的状态。</div>
    <h4>Prop验证</h4>
    <p>prop 是一个对象而不是字符串数组时，它包含验证要求</p>
    <prop-validation
      v-bind:propA="1"
      v-bind:propB="2"
      v-bind:propC="'a'"
      v-bind:propF="11"
    ></prop-validation>
    <p>type 也可以是一个自定义构造器，使用 instanceof 检测</p>
    <h4>自定义事件</h4>
    <p>我们知道，父组件是使用 props 传递数据给子组件，但如果子组件要把数据传递回去，应该怎样做？那就是自定义事件！</p>
    <h5>使用v-on绑定自定义事件</h5>
    <ul>
      <li>使用 $on(eventName) 监听事件</li>
      <li>使用 $emit(eventName) 触发事件</li>
    </ul>
    <p>另外，父组件可以在使用子组件的地方直接用 v-on 来监听子组件触发的事件。</p>
    <div>
      <div>{{total}}</div>
      <button-counter v-on:increment="incrementTotal"></button-counter>
      <button-counter v-on:increment="incrementTotal"></button-counter>
    </div>
    <p>也可参考ConditionalsAndLoops和TodoItem2</p>
    <h5>给组件绑定原生事件</h5>
    <p>有时候，你可能想在某个组件的根元素上监听一个原生事件。可以使用 .native 修饰 v-on 。例如:v-on:click.native="doSomething"</p>
    <h4>使用自定义事件的表单输入组件</h4>
    <p>所以要让组件的 v-model 生效，它必须：</p>
    <ul>
      <li>接受一个 value 属性</li>
      <li>在有新的 value 时触发 input 事件</li>
    </ul>
    something:<input type="text" v-bind:value="something" v-on:input="something = $event.target.value">
    <p>something:{{something}}</p>
    something else:<custom-input v-model="somethingElse"></custom-input>
    <p>something else:{{somethingElse}}</p>
    currency:<currency-input v-model="currency"></currency-input>
    <p>currency: ￥{{currency}}</p>
  </div>
</template>

<script type="text/javascript">
import Vue from 'vue';

import SimpleCounter from './components/SimpleCounter';
import PropValidation from './components/PropValidation';
import ButtonCounter from './components/ButtonCounter';
import CurrencyInput from './components/CurrencyInput';
import CustomInput from './components/CustomInput';

Vue.component('comp', {
  props: ['someProp'],
  template: '<div>{{someProp}}, typeof: {{typeof someProp}}<div>',
});

export default {
  name: 'guide-components',
  components: {
    SimpleCounter,
    PropValidation,
    ButtonCounter,
    CurrencyInput,
    CustomInput,
  },
  data() {
    return {
      total: 0,
      something: '',
      somethingElse: '',
      currency: '',
    };
  },
  methods: {
    incrementTotal() {
      this.total += 1;
    },
  },
};
</script>

<style type="text/css">

</style>
