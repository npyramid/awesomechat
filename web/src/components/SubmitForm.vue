<template>
  <form class="submit-form" @submit.prevent="submit">
    <InputUI class="submit-form__input"
             v-model="inputValue"
             placeholder="Сообщение..."
             autofocus />

    <ButtonUI class="submit-form__button" type="submit">
      Отправить
    </ButtonUI>
  </form>
</template>

<script>
  import InputUI from 'src/ui/InputUI';
  import ButtonUI from 'src/ui/ButtonUI';

  function data() {
    return {
      inputValue: '',
    };
  }

  const methods = {
    async submit() {
      const message = this.inputValue;

      if (!message.length) {
        return;
      }

      await this.$store.dispatch('chat/sendMessage', message);
      this.resetInput();
    },

    resetInput() {
      this.inputValue = '';
    },
  };

  const components = {
    InputUI,
    ButtonUI,
  };

  export default {
    name: 'submit-form',
    data,
    methods,
    components,
  };
</script>

<style lang="scss">
  .submit-form {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    position: relative;
    width: 100%;

    &__input {
      width: 100%;
    }

    &__button {}

    &__input + &__button {
      margin-left: 20px;
    }
  }
</style>
