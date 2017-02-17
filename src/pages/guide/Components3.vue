<template>
  <div id="guide-component3">
    <h4>动态组件</h4>
    <p>多个组件可以使用同一个挂载点，然后动态地在它们之间切换。使用保留的 &lt;component&gt; 元素，动态地绑定到它的 is 特性</p>
    <keep-live>
      <component :is="currentView">
        <!-- 组件在 vm.currentview 变化时改变！ -->
        <!-- 非活动组件将被缓存！ -->
      </component>
    </keep-live>
    <input type="radio" id="rdoHello" v-model="currentView" v-bind:value="'hello'">
    <label for="rdoHello">Hello</label>
    <input type="radio" id="rdoClassAndStyple" v-model="currentView" v-bind:value="'classAndStyple'">
    <label for="rdoClassAndStyple">ClassAndStyple</label>
    <p>也可以直接绑定到组件对象上：currentView: Hello</p>
    <h5>keep-live</h5>
    <p>如果把切换出去的组件保留在内存中，可以保留它的状态或避免重新渲染。为此可以添加一个 keep-alive 指令参数</p>

    <h4>杂项</h4>
    <h5>编写可复用组件</h5>
    <p>在编写组件时，记住是否要复用组件有好处。一次性组件跟其它组件紧密耦合没关系，但是可复用组件应当定义一个清晰的公开接口。</p>
    <p>Vue 组件的 API 来自三部分 - props, events 和 slots ：</p>
    <ul>
      <li>Props 允许外部环境传递数据给组件</li>
      <li>Events 允许组件触发外部环境的副作用</li>
      <li>Slots 允许外部环境将额外的内容组合在组件中。</li>
    </ul>

    <h5>子组件索引</h5>
    <p>尽管有 props 和 events ，但是有时仍然需要在 JavaScript 中直接访问子组件。为此可以使用 ref 为子组件指定一个索引 ID 。</p>
    <p>给组件起一个索引ID，ref="xxx"，访问子组件this.$refs.xxx</p>
    <p>当 ref 和 v-for 一起使用时， ref 是一个数组或对象，包含相应的子组件。</p>

    <div class="notice">$refs 只在组件渲染完成后才填充，并且它是非响应式的。它仅仅作为一个直接访问子组件的应急方案——应当避免在模版或计算属性中使用 $refs 。</div>

    <h4>异步组件</h4>
    <p>用到了再说。。。</p>

    <h4>组件命名约定</h4>
    <p>当注册组件（或者 props）时，可以使用 kebab-case ，camelCase ，或 TitleCase 。Vue 不关心这个。在 HTML 模版中，请使用 kebab-case 形式</p>

    <h4>递归组件</h4>
    <p>组件在它的模板内可以递归地调用自己，不过，只有当它有 name 选项时才可以。如果你不谨慎, 递归组件可能导致死循环。</p>

    <h4>其他内容省略。。。用到再说</h4>
  </div>
</template>

<script type="text/javascript">
import Hello from './Hello';
import ClassAndStyle from './ClassAndStyle';

export default {
  name: 'guide-component3',
  components: {
    hello: Hello,
    classAndStyple: ClassAndStyle,
  },
  data() {
    return {
      currentView: 'hello',
    };
  },
};
</script>

<style type="text/css">

</style>
