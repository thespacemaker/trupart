<template>
  <base-card :max-width="maxWidth">
    <v-text-field
      flat
      height="88"
      hide-details
      label="Email Address"
      solo
    >
      <template v-slot:append-outer>
        <v-hover>
          <template v-slot="{ hover }">
            <base-btn
              :elevation="hover ? 0 : 6"
              height="64"
              class="mr-4"
            >
              Subscribe
            </base-btn>
          </template>
        </v-hover>
      </template>
    </v-text-field>
  </base-card>
</template>

<script>
  export default {
    name: 'Subscribe',

    props: {
      maxWidth: {
        type: [Number, String],
        default: 500,
      },
    },
  }
</script>
