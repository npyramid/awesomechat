<template>
  <button class="button-ui" @click="clickHandler">
    <slot />
  </button>
</template>

<script>
  const methods = {
    clickHandler() {
      this.$emit('click');
    },
  };

  export default {
    name: 'button-ui',
    methods,
  };
</script>

<style lang="scss">
  .button-ui {
    position: relative;
    display: inline-flex;
    align-items: center;
    height: 40px;
    padding: 0 10px;
    font-size: inherit;
    background-color: rgba($lightGrey, .1);
    border: none;
    border-radius: 4px;
  }
</style>
