<template>
  <Skeleton class="home">
    <Chat class="home__chat" />
    <SubmitForm class="home__form" />
  </Skeleton>
</template>

<script>
  import Skeleton from 'src/ui/Skeleton';
  import Chat from 'src/components/Chat';
  import SubmitForm from 'src/components/SubmitForm';

  const components = {
    Skeleton,
    SubmitForm,
    Chat,
  };

  export default {
    name: 'home',
    components,
  };
</script>

<style lang="scss">
  .home {
    display: flex;
    flex-flow: column nowrap;
    position: relative;
    width: 100%;
    height: 100%;

    &__chat {
      height: 100%;
    }

    &__form {
      padding: 10px 0;
    }
  }
</style>
