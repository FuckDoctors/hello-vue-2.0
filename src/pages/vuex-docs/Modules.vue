<template>
  <div id="vuex-modules">
    <p>Vuex 允许我们将 store 分割到模块（module）。每个模块拥有自己的 state、mutation、action、getters。</p>
    <code>
    <pre>
      const store = new Vuex.Store({
        modules: {
          a: moduleA,
          b: moduleB
        }
      })

      store.state.a // -> moduleA 的状态
      store.state.b // -> moduleB 的状态
    </pre>
    </code>

    <h2>模块的局部状态</h2>
    <p>对于模块内部的 mutation 和 getter，接收的第一个参数是模块的局部状态。</p>
    <p>同样，对于模块内部的 action，context.state 是局部状态，根节点的状态是 context.rootState。</p>
    <code>
    <pre>
    const moduleA = {
      // ...
      actions: {
        incrementIfOddOnRootSum ({ state, commit, rootState }) {
          if ((state.count + rootState.count) % 2 === 1) {
            commit('increment')
          }
        }
      }
    }
    </pre>
    </code>

    <p>对于模块内部的 getter，根节点状态会作为第三个参数。</p>
    <code>
    <pre>
    const moduleA = {
      // ...
      getters: {
        sumWithRootCount (state, getters, rootState) {
          return state.count + rootState.count
        }
      }
    }
    </pre>
    </code>

    <h2>模块动态注册</h2>
    <p>在 store 创建之后，你可以使用 store.registerModule 方法注册模块。你也可以使用 store.unregisterModule(moduleName) 动态地卸载模块。注意，你不能使用此方法卸载静态模块（在创建 store 时声明的模块）。</p>
    <code>
    <pre>
    store.registerModule('myModule', {
      // ...
    });
    </pre>
    </code>

    <p>对于大型应用，我们会希望把 Vuex 相关代码分割到模块中。下面是项目结构示例：</p>
    <code>
      <pre>
        ├── index.html
        ├── main.js
        ├── api
        │   └── ... # 抽取出API请求
        ├── components
        │   ├── App.vue
        │   └── ...
        └── store
            ├── index.js          # 我们组装模块并导出 store 的地方
            ├── actions.js        # 根级别的 action
            ├── mutations.js      # 根级别的 mutation
            └── modules
                ├── cart.js       # 购物车模块
                └── products.js   # 产品模块
      </pre>
    </code>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'vuex-modules',
};
</script>

<style type="text/css">
#vuex-modules {
  width: 90%;
  margin:auto;
  text-align: left;
}
code {
  margin:auto;
  text-align: left;
}
</style>
