<template>
  <base-card
    class="mx-auto"
    height="600"
    max-width="100%"
    width="300"
  >
    <v-img
      height="100%"
      :src="src"
    />
  </base-card>
</template>

<script>
  export default {
    name: 'ImgCard',

    props: {
      src: {
        type: String,
        required: true,
      },
    },
  }
</script>
