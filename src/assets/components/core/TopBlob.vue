<template>
  <v-img
    :src="require('@/assets/art/blob-top-min.png')"
    style="position: absolute; top: 0; left: 0;"
    :height="$vuetify.breakpoint.smAndDown ? '650' : 'auto'"
    max-width="100%"
    width="1300"
  />
</template>

<script>
  export default {
    name: 'CoreTopBlob',
  }
</script>
