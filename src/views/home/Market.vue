<template>
  <v-container
    id="roadmap"
    class="hidden-xs-and-down"
    tag="section"
    fluid
  >
    <base-subheading
      class="mb-12"
      subtitle="How Trupart builds the future"
      title="Our Stats"
    />

    <v-container>
      <v-row class="pt-12">
        <v-col
          cols="12"
          md="6"
        >
          <base-info-card
            :stats="stats"
            color="#FA6F9E"
            dark
            title="Business stats"
            width="100%"
          />
        </v-col>
        <v-col
          cols="12"
          md="6"
        >
          <base-info-card
            :stats="stats2"
            color="secondary"
            dark
            title="The Fight Against Covid"
            width="100%"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
  export default {
    name: 'HomeMarket',

    data: () => ({
      stats: [
        { title: '20,000,000+', subtitle: 'Parts Manufactured' },
        { title: '3', subtitle: 'Generations Family Owned' },
        { title: '47', subtitle: 'Years in Business' },
        { title: '200+', subtitle: 'Years of Experience' },
      ],
      stats2: [
        { title: '2000', subtitle: 'Face Shields Produced' },
        { title: '2000', subtitle: 'Face Shields Donated' },
        { title: '100s', subtitle: 'Hours of time' },
        { title: '7', subtitle: 'Open Source Contributions' },
      ],
    }),
  }
</script>
