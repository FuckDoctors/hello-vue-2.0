<template>
  <div id="router-data-fetching">
    <pre>
      有时候，进入某个路由后，需要从服务器获取数据。例如，在渲染用户信息时，你需要从服务器获取用户的数据。我们可以通过两种方式来实现：

      导航完成之后获取：先完成导航，然后在接下来的组件生命周期钩子中获取数据。在数据获取期间显示『加载中』之类的指示。

      导航完成之前获取：导航完成前，在路由的 enter 钩子中获取数据，在数据获取成功后执行导航。

      从技术角度讲，两种方式都不错 —— 就看你想要的用户体验是哪种。
    </pre>

    <h4>导航完成后获取数据</h4>
    <p>当你使用这种方式时，我们会马上导航和渲染组件，然后在组件的 created 钩子中获取数据。这让我们有机会在数据获取期间展示一个 loading 状态，还可以在不同视图间展示不同的 loading 状态。</p>

    <h4>在导航完成前获取数据</h4>
    <p>通过这种方式，我们在导航转入新的路由前获取数据。我们可以在接下来的组件的 beforeRouteEnter 钩子中获取数据，当数据获取成功后只调用 next 方法。</p>
    <p>在为后面的视图获取数据时，用户会停留在当前的界面，因此建议在数据获取期间，显示一些进度条或者别的指示。如果数据获取失败，同样有必要展示一些全局的错误提醒。</p>

    <router-link to="after">导航完成后获取数据</router-link>
    <router-link to="before">导航完成前获取数据</router-link>

    <transition name="slide">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'router-data-fetching',
};
</script>

<style type="text/css">

</style>
