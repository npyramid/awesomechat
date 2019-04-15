<template>
  <div class="message" :class="classes">
    <div class="message__content">
      {{ message.text }}

      <span class="message__time">
        {{ time }}
      </span>
    </div>
  </div>
</template>

<script>
  const props = {
    message: Object,
  };

  const computed = {
    time() {
      const dateObj = this.message.createdAt;
      const hours = dateObj.getHours();
      const minutes = dateObj.getMinutes();
      return `${hours}:${minutes}`;
    },

    from() {
      return this.message.from || 'me';
    },

    isServer() {
      return this.from === 'server';
    },

    classes() {
      return {
        'message--server': this.isServer,
      };
    },
  };

  export default {
    name: 'message',
    props,
    computed,
  };
</script>

<style lang="scss">
  $borderRadius: 6px;

  .message {
    display: flex;
    position: relative;
    width: 100%;
    line-height: 1.3;

    &:first-of-type {
      margin-top: 10px;
    }

    &__content {
      display: inline-flex;
      flex-flow: row nowrap;
      align-items: flex-end;
      max-width: 80%;
      padding: 10px;
      border-radius: $borderRadius $borderRadius $borderRadius 0;
      background-color: rgba($lightGrey, .08);
    }

    &--server {
      justify-content: flex-end;
    }

    &--server &__content {
      border-radius: $borderRadius $borderRadius 0 $borderRadius;
      background-color: rgba($lightGrey, .3);
    }

    &__time {
      color: $lightGrey;
      font-size: 12px;
      padding-left: 7px;
    }
  }
</style>
