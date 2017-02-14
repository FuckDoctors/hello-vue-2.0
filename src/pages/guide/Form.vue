<template>
  <div id="guide-form">
    <h4>文本</h4>
    <input type="text" name="test" v-model="message">
    <p>内容：{{message}}</p>
    <h4>多行文本（style="white-space: pre"）</h4>
    <p style="white-space: pre">内容：{{multilineMessage}}</p>
    <textarea v-model="multilineMessage"></textarea>
    <h4 class="notice">input和textarea不能在标签中设置默认值，可以通过v-model设置。</h4>
    <h4 class="notice">.notice样式是在ConditionalsAndLoops中定义的，但是可以在其他组件中使用，所以组件中的样式最好设置为scoped！？</h4>
    <h4>复选框</h4>
    <input type="checkbox" name="checkbox" value="checked" id="checkbox" v-model="checked">
    <label for="checkbox">{{checked}}</label>
    <h4>多个勾选框，绑定到同一个数组：</h4>
    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
    <label for="jack">Jack</label>
    <input type="checkbox" id="john" value="John" v-model="checkedNames">
    <label for="john">John</label>
    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
    <label for="mike">Mike</label>
    <input type="checkbox" id="zhao" value="Zhao" v-model="checkedNames">
    <label for="zhao">Zhao</label>
    <br>
    <span>Checked names: {{ checkedNames }}</span>
    <h4>单选按钮</h4>
    <input type="radio" name="radio" id="one" value="One" v-model="picked">
    <label for="one">One</label>
    <input type="radio" name="radio" id="two" value="Two" v-model="picked">
    <label for="two">Two</label>
    <p>Picked:{{picked}}</p>
    <h4>选择列表</h4>
    <h5>单选列表</h5>
    <select name="selected" id="select" v-model="selected">
      <option value="A">A</option>
      <option value="B">B</option>
      <option value="C">C</option>
    </select>
    <p>selected:{{selected}}</p>
    <h5>单选列表</h5>
    <select multiple="true" name="multiSelected" id="multiSelect" v-model="multiSelected">
      <option value="A">A</option>
      <option value="B">B</option>
      <option value="C">C</option>
      <option value="D">D</option>
    </select>
    <p>selected:{{multiSelected}}</p>
    <h5>动态选项，v-for渲染</h5>
    <select v-model="selected">
      <option v-for="option in options" v-bind:value="option.value">{{option.text}}</option>
    </select>
    <p>selected:{{selected}}</p>
    <h4>绑定Value</h4>
    <p>
      对于单选按钮，勾选框及选择列表选项， v-model 绑定的 value 通常是静态字符串（对于勾选框是boolean）
      <br />
      但是有时我们想绑定 value 到 Vue 实例的一个动态属性上，这时可以用 v-bind 实现，并且这个属性的值可以不是字符串。
    </p>
    <h5>复选框</h5>
    <input type="checkbox" name="bind"
      v-model="checkBind"
      v-bind:true-value="'a'"
      v-bind:false-value="'b'"
    >
    <p>selected:{{showCheckBind}}</p>
    <h5>单选框</h5>
    <input type="radio" name="bind"
      v-model="radioBind"
      v-bind:value="'a'"
    >
    <input type="radio" name="bind"
      v-model="radioBind"
      v-bind:value="'b'"
    >
    <p>selected:{{showRadioBind}}</p>
    <h5>选择列表</h5>
    <select v-model="selectBind">
      <option v-bind:value="{number: 123}">123</option>
      <option v-bind:value="{number: 456}">456</option>
    </select>
    <p>selected:{{showSelectBind}}</p>
    <h4>修饰符</h4>
    <h5>.lazy</h5>
    <p>在默认情况下， v-model 在 input 事件中同步输入框的值与数据 (除了 中文，日文，韩文等 IME 部分)，但你可以添加一个修饰符 lazy ，从而转变为在 change 事件中同步：</p>
    <div>在 "change" 而不是 "input" 事件中更新:{{msg}}</div>
    <input type="text" v-model.lazy="msg">
    <h5>.number</h5>
    <p>如果想自动将用户的输入值转为 Number 类型（如果原值的转换结果为 NaN 则返回原值），可以添加一个修饰符 number 给 v-model 来处理输入值。这通常很有用，因为在 type="number" 时 HTML 中输入的值也总是会返回字符串类型。</p>
    <input type="number" name="number" v-model.number="num">
    <p>typeof num : text{{typeof num}}</p>
    <p>
      type="number"加不加.number貌似没什么区别呢？？？
      <br />
      type="text"加上.number输入数字时typeof为textnumber，不加.number为textstring。
    </p>
    <h4>.trim</h4>
    <input type="text" name="trim" v-model.trim="trimValue">
    <p>Trim value : '{{trimValue}}'</p>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'guide-form',
  data() {
    return {
      message: '',
      multilineMessage: '',
      checked: true,
      checkedNames: [],
      picked: 'Two',
      selected: 'B',
      multiSelected: ['B'],
      options: [
        {
          text: 'Text A',
          value: 'A',
        }, {
          text: 'Text B',
          value: 'B',
        }, {
          text: 'Text C',
          value: 'C',
        }, {
          text: 'Text D',
          value: 'D',
        },
      ],
      checkBind: '',
      radioBind: '',
      selectBind: 123, // 不会默认选中，对象类型不对
      /*
      selectBind: {
        number: 123,
      },
      */
      msg: '',
      num: '',
      trimValue: '',
    };
  },
  computed: {
    showCheckBind() {
      return this.checkBind;
    },
    showRadioBind() {
      return this.radioBind;
    },
    showSelectBind() {
      return this.selectBind;
    },
  },
};
</script>

<style type="text/css">

</style>
