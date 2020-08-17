<template>
  <v-hover>
    <template v-slot="{ hover }">
      <base-card
        v-bind="$attrs"
        :elevation="hover ? 0 : 12"
        class="px-8 py-12"
      >
        <v-card-title
          class="font-weight-light"
          v-text="title"
        />

        <v-card-text>
          <v-row>
            <v-col
              v-for="(stat, i) in stats"
              :key="i"
              class="mt-4"
              cols="6"
              xl="3"
            >
              <div
                class="headline font-weight-bold white--text mb-5"
                v-text="stat.title"
              />

              <span
                class="text-uppercase font-weight-bold"
                v-text="stat.subtitle"
              />
            </v-col>
          </v-row>
        </v-card-text>
      </base-card>
    </template>
  </v-hover>
</template>

<script>
  export default {
    name: 'InfoCard',

    props: {
      stats: {
        type: Array,
        default: () => [],
      },
      title: {
        type: String,
        default: '',
      },
    },
  }
</script>
