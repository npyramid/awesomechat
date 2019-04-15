<template>
  <div class="chat" v-chat-scroll>
    <Message class="chat__item"
             v-for="(message, index) in messages"
             :key="index"
             :type="message.from" :message="message" />
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import Message from 'src/ui/Message';

  const computed = {
    ...mapState('chat', ['messages']),
  };

  const components = {
    Message,
  };

  export default {
    name: 'chat',
    computed,
    components,
  };
</script>

<style lang="scss">
  .chat {
    display: flex;
    position: relative;
    width: 100%;
    flex-direction: column;
    overflow-y: auto;

    &__item + &__item {
      margin-top: 5px;
    }
  }
</style>
