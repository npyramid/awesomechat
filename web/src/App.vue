<template>
  <div id="app" class="app">
    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'app',
  };
</script>

<style lang="scss">
  @import 'src/assets/styles/app';

  .app {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    font-family: $Plex;
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  * {
    box-sizing: border-box;
  }
</style>
