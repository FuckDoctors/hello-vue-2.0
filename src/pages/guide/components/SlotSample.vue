<template>
  <div id="guide-slot">
    <h5>我是子组件的标题</h5>
    <slot>
      slot内容：只有在没有要分发的内容时才会显示。
    </slot>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'guide-slot',
};
</script>

<style type="text/css">

</style>
