<template>
  <v-container
    id="token"
    tag="section"
    fluid
  >
    <base-subheading
      class="mb-12"
      subtitle="How CRYPTO Coin works for you"
      title="Security Above ALL"
    />

    <v-row
      justify="space-around"
      no-gutters
    >
      <v-col
        class="text-center mb-6 mb-md-0"
        cols="12"
        md="auto"
      >
        <base-card
          class="pa-6 mb-6 mx-auto"
          color="primary"
          width="128"
        >
          <v-img
            :src="require(`@/assets/guarantees/1.png`)"
            height="74"
            width="74"
          />
        </base-card>

        <h4 class="headline font-weight-bold">
          Credit
        </h4>

        <div class="title font-weight-light">
          Easy third party<br>Exchange
        </div>
      </v-col>

      <v-col cols="12" />

      <v-col
        class="text-center mb-6 mb-md-0"
        cols="12"
        md="auto"
      >
        <base-card
          class="pa-6 mx-auto mb-6"
          color="primary"
          width="128"
        >
          <v-img
            :src="require(`@/assets/guarantees/2.png`)"
            height="74"
            width="74"
          />
        </base-card>

        <h4 class="headline font-weight-bold">
          Protection
        </h4>

        <div class="title font-weight-light">
          Cutting-edge security
        </div>
      </v-col>

      <v-col
        class="text-center mb-6 mb-md-0"
        cols="12"
        md="auto"
      >
        <base-card
          class="pa-6 mx-auto mb-6"
          color="primary"
          width="128"
        >
          <v-img
            :src="require(`@/assets/guarantees/3.png`)"
            height="74"
            width="74"
          />
        </base-card>

        <h4 class="headline font-weight-bold">
          Verified
        </h4>

        <div class="title font-weight-light">
          Global verification network
        </div>
      </v-col>

      <v-col cols="12" />

      <v-col
        class="text-center mb-6 mb-md-0"
        cols="12"
        md="auto"
      >
        <base-card
          class="pa-6 mb-6 mx-auto"
          color="primary"
          width="128"
        >
          <v-img
            :src="require(`@/assets/logo.png`)"
            contain
            height="74"
            width="74"
          />
        </base-card>

        <h4 class="headline font-weight-bold">
          CRYPTO Coin
        </h4>
      </v-col>

      <v-col cols="12" />

      <v-col
        class="text-center mb-6 mb-md-0"
        cols="12"
        md="auto"
      >
        <base-card
          class="pa-6 mx-auto mb-6"
          color="primary"
          width="128"
        >
          <v-img
            :src="require(`@/assets/guarantees/4.png`)"
            height="74"
            width="74"
          />
        </base-card>

        <h4 class="headline font-weight-bold">
          Private
        </h4>

        <div class="title font-weight-light">
          128 bit Secure Chat<br>Network
        </div>
      </v-col>

      <v-col
        class="text-center mb-6 mb-md-0"
        cols="12"
        md="auto"
      >
        <base-card
          class="pa-6 mx-auto mb-6"
          color="primary"
          width="128"
        >
          <v-img
            :src="require(`@/assets/guarantees/5.png`)"
            height="74"
            width="74"
          />
        </base-card>

        <h4 class="headline font-weight-bold">
          Monitored
        </h4>

        <div class="title font-weight-light">
          99.7% Uptime Guaranteed
        </div>
      </v-col>

      <v-col cols="12" />

      <v-col
        class="text-center"
        cols="12"
        md="auto"
      >
        <base-card
          class="pa-6 mx-auto mb-6"
          color="primary"
          width="128"
        >
          <v-img
            :src="require(`@/assets/guarantees/5.png`)"
            height="74"
            width="74"
          />
        </base-card>

        <h4 class="headline font-weight-bold">
          Global
        </h4>

        <div class="title font-weight-light">
          Worldwide data centers
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'Token',
  }
</script>
