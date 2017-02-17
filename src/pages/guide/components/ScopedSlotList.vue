<template>
  <div id="guide-scoped-slot-list" class="list">
    <ul>
      <slot name="item"
        v-for="item in items"
        :text="item.text"
      >
        <!-- fallback content here -->
      </slot>
    </ul>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'guide-scoped-slot-list',
  props: ['items'],
};
</script>

<style type="text/css">

</style>
