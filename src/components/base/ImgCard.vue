<template>
  <base-card
    class="mx-auto"
    height="600"
    max-width="100%"
    width="500"
  >
    <v-img
      height="100%"
      :src="src"
    >
      <template v-slot:placeholder>
        <v-row
          class="fill-height ma-0"
          align="center"
          justify="center"
        >
          <v-progress-circular
            indeterminate
            color="grey lighten-5"
          />
        </v-row>
      </template>
    </v-img>
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
