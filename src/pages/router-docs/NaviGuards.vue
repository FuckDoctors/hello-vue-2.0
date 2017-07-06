<template>
  <div id="router-navi-guards">
    <h2>导航钩子</h2>
    <p>正如其名，vue-router 提供的导航钩子主要用来拦截导航，让它完成跳转或取消。有多种方式可以在路由导航发生时执行钩子：全局的, 单个路由独享的, 或者组件级的。</p>

    <h3>全局钩子</h3>
    <p>你可以使用 router.beforeEach 注册一个全局的 before 钩子：</p>
    <code>
      <pre>
        const router = new VueRouter({ ... })
        router.beforeEach((to, from, next) => {
          // ...
        })
      </pre>
    </code>

    <p>当一个导航触发时，全局的 before 钩子按照创建顺序调用。钩子是异步解析执行，此时导航在所有钩子 resolve 完之前一直处于 等待中。</p>
    <p>每个钩子有3个参数：</p>
    <ul>
      <li>to: Route: 即将要进入的目标 路由对象</li>
      <li>from: Route: 当前导航正要离开的路由</li>
      <li>
        <p>next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。</p>
        <ul>
          <li>next(): 进行管道中的下一个钩子。如果全部钩子执行完了，则导航的状态就是 confirmed （确认的）。</li>
          <li>next(false): 中断当前的导航。如果浏览器的 URL 改变了（可能是用户手动或者浏览器后退按钮），那么 URL 地址会重置到 from 路由对应的地址。</li>
          <li>next('/') 或者 next({ path: '/' }): 跳转到一个不同的地址。当前的导航被中断，然后进行一个新的导航。</li>
        </ul>
        <p style="font-weight: bold">确保要调用 next 方法，否则钩子就不会被 resolved。</p>
      </li>
    </ul>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'router-navi-guards',
};
</script>

<style type="text/css">
#router-navi-guards {
  width: 90%;
  margin: auto;
  text-align: left;
}
</style>
