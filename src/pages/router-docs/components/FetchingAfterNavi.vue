<template>
  <div id="router-fetch-after-navi">
    <div class="post">
      <div class="loading" v-if="loading">
        Loading...
      </div>
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
export default {
  name: 'router-fetch-after-navi',
  data() {
    return {
      loading: false,
      error: null,
      post: null,
    };
  },
  created() {
    // 组件创建完后获取数据，
    // 此时 data 已经被 observed 了
    this.fetchData();
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    $route: 'fetchData',
  },
  methods: {
    fetchData() {
      this.error = null;
      this.post = null;
      this.loading = true;
      // replace getPost with your data fetching util / API wrapper
      this.getPost(this.$route.params.id, (err, post) => {
        this.loading = false;
        if (err) {
          this.error = err.toString();
        } else {
          this.post = post;
        }
      });
    },
    getPost(id, callback) {
      setTimeout(() => {
        callback(null, {
          title: 'Hello world',
          body: 'Contents here...',
        });
      }, 2000);
    },
  },
};
</script>

<style type="text/css">

</style>
