<template>
  <div id="guide-named-slot">
    <div class="container">
      <header>
        <slot name="header"></slot>
      </header>
      <main>
        <slot></slot>
      </main>
      <footer>
        <slot name="footer"></slot>
      </footer>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'guide-named-slot',
};
</script>

<style type="text/css">

</style>
