<template>
  <div class="skeleton">
    <slot />
  </div>
</template>

<script>
  export default {
    name: 'skeleton',
  };
</script>

<style lang="scss">
  .skeleton {
    position: relative;
    height: 100%;
    width: 100%;
    max-width: 1000px;
    padding: 0 15px;
    margin: 0 auto;
  }
</style>
