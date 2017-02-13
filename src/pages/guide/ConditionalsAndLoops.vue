<template v-if="renderTemplate">
  <div id="guide-conditinals">
    <p v-if="seen">现在你能看见我</p><button @click="toggle">显示/隐藏</button>
    <div v-if="seen">显示中</div>
    <div v-else="seen">隐藏了</div>
    <template v-if="renderTemplate">
      <h3>内部template</h3>
      <p>其他内容</p>
    </template>
    <h3>v-else-if</h3>
    <div v-if="type === 'A'">A</div>
    <div v-else-if="type === 'B'">B</div>
    <div v-else-if="type === 'C'">C</div>
    <div v-else-if="type === 'D'">D</div>
    <div v-else>Something else</div>
    <hr />
    <h3>使用key控制元素的可重用</h3>
    <p>Vue 尝试尽可能高效的渲染元素，通常会复用已有元素而不是从头开始渲染。
    在代码中切换 loginType 不会删除用户已经输入的内容，两个模版由于使用了相同的元素，&lt;input&gt; 会被复用，仅仅是替换了他们的 placeholder。</p>
    <template v-if="loginType === 'username'">
      <label>Username</label>
      <input type="text" name="username" placeholder="请输入用户名">
    </template>
    <template v-else>
      <label>Email</label>
      <input type="text" name="email" placeholder="请输入电子邮箱">
    </template>
    <button @click="toggleLoginType">切换登录方式</button>
    <hr />
    <p>这样也不总是符合实际需求，所以 Vue 提供一种方式让你可以自己决定是否要复用元素。你要做的是添加一个属性 key ，key 必须带有唯一的值。</p>
    <template v-if="loginType === 'username'">
      <label>Username</label>
      <input type="text" name="username" placeholder="请输入用户名" key="username">
    </template>
    <template v-else>
      <label>Email</label>
      <input type="text" name="email" placeholder="请输入电子邮箱" key="email">
    </template>
    <button @click="toggleLoginType">切换登录方式</button>
    <hr />
    <h3>列表渲染</h3>
    <ul>
      <li v-for="todo in todos">{{todo.text}}</li>
    </ul>
    <ol>
      <todo-item v-for="todo in todos" v-bind:todo="todo"></todo-item>
    </ol>
    <h4>索引项</h4>
    <ol>
      <li v-for="(item, index) in todos">第{{index}}项：{{item.text}}</li>
    </ol>
    <h4>Template v-for</h4>
    <ul>
      <template v-for="todo in todos">
        <li>{{todo.text}}</li>
        <li class="divider"></li>
      </template>
    </ul>
    <h4>对象迭代：2个参数</h4>
    <ul>
      <li v-for="(value, key) in user">{{key}}:{{value}}</li>
    </ul>
    <h4>对象迭代：3个参数</h4>
    <ul>
      <li v-for="(value, key, index) in user" :key="index">{{index}}.{{key}}:{{value}}</li>
    </ul>
    <h4 class="notice">在遍历对象时，是按 Object.keys() 的结果遍历，但是不能保证它的结果在不同的 JavaScript 引擎下是一致的。</h4>
    <h4 class="notice">为了避免循环中Vue使用就地复用Dom的情况，每个循环项中推荐使用:key。</h4>
    <h4>整数迭代</h4>
    <div>
      <span v-for="n in 10">{{n}}</span>
    </div>
    <h4>组件和v-for</h4>
    <p>在自定义组件里，你可以像任何普通元素一样用 v-for。然而他不能自动传递数据到组件里，因为组件有自己独立的作用域。为了传递迭代数据到组件里，我们要用 props</p>
    <p>下面是一个简单的 todo list 完整的例子：</p>
    <div>
      <input type="text"
        v-model="newTodoText"
        placeholder="Add a todo"
        v-on:keyup.enter="addNewTodo"
      >
      <ul>
        <li is="todo-item2"
          v-for="(todo, index) in todos"
          v-bind:title="todo.text"
          v-bind:index="index"
          v-on:remove="removeTodo(index)">
        </li>
      </ul>
    </div>
    <h4 class="notice">数组更新监测：数组的操作推荐使用Vue.set方法以及数组的splice方法。</h4>
    <h4>显示过滤和排序</h4>
    <div>computed:<span v-for="num in evenNumbers">{{num}}</span></div>
    <div>method:<span v-for="num in even(numbers)">{{num}}</span></div>
  </div>
</template>

<script type="text/javascript">
import Vue from 'vue';

import TodoItem2 from './TodoItem2';

Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{todo.text}} From Component.</li>',
});

export default {
  name: 'guide-conditinals',
  components: {
    TodoItem2,
  },
  data() {
    return {
      seen: true,
      newTodoText: '',
      todos: [
        {
          text: '学习JavaScript',
        }, {
          text: '学习Vue',
        }, {
          text: '学习前端开发',
        },
      ],
      renderTemplate: false, // 最外层template上不起作用，内部template有效
      type: 'C',
      loginType: 'username',
      user: {
        firstName: 'Zhao',
        LastName: 'Bin',
        age: '30',
      },
      numbers: [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
      ],
    };
  },
  computed: {
    evenNumbers() {
      return this.numbers.filter(number => number % 2 === 0);
    },
  },
  methods: {
    toggle() {
      this.seen = !this.seen;
    },
    toggleLoginType() {
      if (this.loginType === 'username') {
        this.loginType = 'email';
      } else {
        this.loginType = 'username';
      }
    },
    addNewTodo() {
      if (this.newTodoText.length === 0) {
        return;
      }
      this.todos.push({
        text: this.newTodoText,
      });
      this.newTodoText = '';
    },
    removeTodo(index) {
      console.log(`removeTodo ${index}...`);
      this.todos.splice(index, 1);
    },
    even(numbers) {
      return numbers.filter(number => number % 2 === 0);
    },
  },
};
</script>

<style type="text/css">
li.divider {
  height:12px;
  border-right:1px green solid;
}
li.divider:last-child {
  display: none;
  border-right:none;
}
.notice {
  border-left:3px red solid;
  margin-left: 10px;
  padding-left: 10px;
  text-align: left;
}
</style>
