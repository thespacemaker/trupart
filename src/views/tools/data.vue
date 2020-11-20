<template>
  <v-container
    id="about"
    tag="section"
  >
    <base-subheading
      class="mb-12 primary--text"
      tag="h1"
      title="Engineering Data"
    />
    <v-container>
      <v-row
        align="center"
        justify="space-around"
      >
        <v-btn @click.stop="feedsDialog = true">
          Feeds and Speeds
        </v-btn>
        <v-btn
          color="primary"
          @click.stop="specsDialog = true"
        >
          Metal Specifications
        </v-btn>
      </v-row>

      <v-dialog
        v-model="feedsDialog"
        max-width="1000"
      >
        <feeds />
      </v-dialog>

      <v-dialog
        v-model="specsDialog"
        max-width="1000"
      >
        <specs />
      </v-dialog>
    </v-container>
  </v-container>
</template>

<script>
  import Feeds from './components/feeds'
  import Specs from './components/specs'

  export default {
    name: 'EngineerData',
    components: {
      Feeds,
      Specs,
    },
    data: () => ({
      feedsDialog: false,
      specsDialog: false,
    }),
  }
</script>
