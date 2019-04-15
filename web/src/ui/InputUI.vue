<template>
  <input class="input-ui" v-model="inputValue">
</template>

<script>
  const model = {
    prop: 'value',
    event: 'input',
  };

  const props = {
    value: String,
  };

  const computed = {
    inputValue: {
      get() {
        return this.value;
      },

      set(value) {
        this.$emit('input', value);
      },
    },
  };

  export default {
    name: 'input-ui',
    props,
    model,
    computed,
  };
</script>

<style lang="scss">
  .input-ui {
    border: none;
    padding-bottom: 10px;
    border-bottom: 1px solid $lightGrey;
    font-size: inherit;

    &:focus {
      outline: none;
    }
  }
</style>
