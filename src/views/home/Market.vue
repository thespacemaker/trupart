<template>
  <v-container
    id="roadmap"
    class="hidden-sm-and-down"
    tag="section"
    fluid
  >
    <base-subheading
      class="mb-12"
      subtitle="How CRYPTO Coin is doing"
      title="Market Data"
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
            title="Blockchain Data"
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
            title="Price Statistics"
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
        { title: '797,054,934', subtitle: 'Total Supply' },
        { title: '2,945,066', subtitle: 'EQL Burnt' },
        { title: '48,385', subtitle: 'Transactions' },
        { title: '18', subtitle: 'Decimals' },
      ],
      stats2: [
        { title: '$0.0018', subtitle: 'USD Price' },
        { title: '$582,457', subtitle: 'Market Cap' },
        { title: '$546', subtitle: '24H Volume' },
        { title: '6.27%', subtitle: '24H Change' },
      ],
    }),
  }
</script>
