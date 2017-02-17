<template>
  <div id="guide-components2">
    <h4>使用Slot分发内容</h4>
    <p>为了让组件可以组合，我们需要一种方式来混合父组件的内容与子组件自己的模板。这个过程被称为 内容分发 (或 “transclusion” 如果你熟悉 Angular)。Vue.js 实现了一个内容分发 API ，参照了当前 Web 组件规范草案，使用特殊的 <slot> 元素作为原始内容的插槽。</p>
    <h5>编译作用域</h5>
    <p>父组件模板的内容在父组件作用域内编译；子组件模板的内容在子组件作用域内编译。</p>
    <h5>单个Slot</h5>
    <p>除非子组件模板包含至少一个 <slot> 插口，否则父组件的内容将会被丢弃。当子组件模板只有一个没有属性的 slot 时，父组件整个内容片段将插入到 slot 所在的 DOM 位置，并替换掉 slot 标签本身。</p>
    <p>最初在 <slot> 标签中的任何内容都被视为备用内容。备用内容在子组件的作用域内编译，并且只有在宿主元素为空，且没有要插入的内容时才显示备用内容。</p>

    <h5>我是父组件的标题</h5>
    <slot-sample></slot-sample>
    <slot-sample>
      <p>这是一些初始内容</p>
      <p>这是更多的初始内容</p>
    </slot-sample>
    <h5>具名Slot</h5>
    <p><slot> 元素可以用一个特殊的属性 name 来配置如何分发内容。多个 slot 可以有不同的名字。具名 slot 将匹配内容片段中有对应 slot 特性的元素。</p>
    <p>仍然可以有一个匿名 slot ，它是默认 slot ，作为找不到匹配的内容片段的备用插槽。如果没有默认的 slot ，这些找不到匹配的内容片段将被抛弃。</p>
    <p>在组合组件时，内容分发 API 是非常有用的机制。</p>

    <named-slot>
      <h1 slot="header">这里可能是一个页面标题</h1>
      <p>主要内容的一个段落。</p>
      <p>另一个主要段落。</p>
      <p slot="footer">这里有一些联系信息</p>
    </named-slot>


    <h4>作用域插槽</h4>
    <p>作用域插槽是一种特殊类型的插槽，用作使用一个（能够传递数据到）可重用模板替换已渲染元素。</p>
    <p>在子组件中，只需将数据传递到插槽，就像你将 prop 传递给组件一样</p>
    <p>在父级中，具有特殊属性 scope 的 &lt;template&gt; 元素，表示它是作用域插槽的模板。scope 的值对应一个临时变量名，此变量接收从子组件中传递的 prop 对象</p>

    <div class="parent">
      <scoped-slot>
        <template scope="props">
          <span>hello from parent</span>
          <span>{{ props.text }}</span>
        </template>
      </scoped-slot>
    </div>

    <p>作用域插槽更具代表性的用例是列表组件，允许组件自定义应该如何渲染列表每一项</p>
    <scoped-slot-list :items="items">
      <template slot="item" scope="todo" >
        <li>{{todo.text}}</li>
      </template>
    </scoped-slot-list>
  </div>
</template>

<script type="text/javascript">
import SlotSample from './components/SlotSample';
import NamedSlot from './components/NamedSlot';
import ScopedSlot from './components/ScopedSlot';
import ScopedSlotList from './components/ScopedSlotList';

export default {
  name: 'guide-components2',
  components: {
    SlotSample,
    NamedSlot,
    ScopedSlot,
    ScopedSlotList,
  },
  data() {
    return {
      items: [
        {
          text: 'todo1',
        }, {
          text: 'todo2',
        }, {
          text: 'todo3',
        },
      ],
    };
  },
};
</script>

<style type="text/css">

</style>
