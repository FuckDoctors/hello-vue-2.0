<template>
  <div id="router-fetch-before-navi">
    <div class="post">
      <div class="error" v-if="error">
        {{ error }}
      </div>
      <div class="content" v-if="post">
        <h2>{{ post.title }}</h2>
        <p>{{ post.body }}</p>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
function getPost(id, callback) {
  setTimeout(() => {
    callback(null, {
      title: 'Fetching Before Navigation',
      body: 'Contents here...',
    });
  }, 2000);
}

export default {
  name: 'router-fetch-before-navi',
  data() {
    return {
      error: null,
      post: null,
    };
  },
  beforeRouteEnter(to, from, next) {
    // 编译没错，执行出错，找不到this.getPost
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当钩子执行前，组件实例还没被创建
    getPost(to.params.id, (err, post) => {
      next(vm => vm.setData(err, post));
    });
  },
  // when route changes and this component is already rendered,
  // the logic will be slightly different.
  beforeRouteUpdate(to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
    this.post = null;
    getPost(to.params.id, (err, post) => {
      this.setData(err, post);
      next();
    });
  },
  methods: {
    setData(err, post) {
      if (err) {
        this.error = err.toString();
      } else {
        this.post = post;
      }
    },
  },
};
</script>

<style type="text/css">

</style>
