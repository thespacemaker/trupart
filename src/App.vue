<template>
  <v-app>
    <core-navigation :toggle="drawer" />
    <template v-if="$route.name === 'home'">
      <core-top-blob />

      <core-left-blob />

      <core-right-blob />
    </template>

    <core-toolbar @clicked="onClickChild" />

    <core-view />

    <core-footer />
  </v-app>
</template>

<script>
  export default {
    name: 'App',

    components: {
      CoreNavigation: () => import('@/components/core/Navigation'),
      CoreFooter: () => import('@/components/core/Footer'),
      CoreLeftBlob: () => import('@/components/core/LeftBlob'),
      CoreRightBlob: () => import('@/components/core/RightBlob'),
      CoreToolbar: () => import('@/components/core/Toolbar'),
      CoreTopBlob: () => import('@/components/core/TopBlob'),
      CoreView: () => import('@/components/core/View'),
    },
    metaInfo: {
      // if no subcomponents specify a metaInfo.title, this title will be used
      title: 'Trupart Manufacuring',
      // all titles will be injected into this template
      titleTemplate: '%s | 67 Years of Quality Manufacturing',
    },

    data: () => ({
      drawer: false,
    }),

    methods: {
      onClickChild (value) {
        console.log('changing')
        this.drawer = value // someValue
        console.log(this.drawer)
      },
    },
  }
</script>

<style>
.v-navigation-drawer {
z-index: 999999 !important;
}
</style>
