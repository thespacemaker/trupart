<template>
  <section id="home">
    <hero />

    <features />

    <stack v-if="$vuetify.breakpoint.smAndUp" />

    <guarantees />

    <v-video />

    <market />

    <stay-informed />
  </section>
</template>

<script>
  export default {
    name: 'Home',

    components: {
      Hero: () => import('./Hero'),
      Features: () => import('./Features'),
      VVideo: () => import('./Video'),
      Market: () => import('./Market'),
      Stack: () => import('./Stack'),
      Guarantees: () => import('./Guarantees'),
      StayInformed: () => import('./StayInformed'),
    },
  }
</script>

<style lang="sass">
  #home section
    padding: 32px 16px 96px

    @media screen and (max-width: 360px)
      padding: 32px 16px
</style>
