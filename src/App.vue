<template>
  <v-app>
    <template v-if="$route.name === 'home'">
      <core-top-blob />

      <core-left-blob />

      <core-right-blob />
    </template>

    <core-toolbar />

    <core-view />

    <core-footer />
  </v-app>
</template>

<script>
  export default {
    name: 'App',

    components: {
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
  }
</script>
