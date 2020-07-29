<template>
  <v-container
    id="token"
    tag="section"
    fluid
  >
    <base-subheading
      class="mb-12"
      subtitle="What sets us apart"
      title="TruPart"
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
          <!-- <v-img
            :src="require(`@/assets/guarantees/1.png`)"
            height="74"
            width="74"
          /> -->
          <v-icon
            x-large
            dark
          >
            home
          </v-icon>
        </base-card>

        <h4 class="headline font-weight-bold">
          ASAP Approval
        </h4>

        <div class="title font-weight-light">
          Expedited parts and quotes
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
          Track Your Parts
        </h4>

        <div class="title font-weight-light">
          Coming Soon...
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
          Human verification for every part
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
          46 Years of Excellence
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
          Machine Learning
        </h4>

        <div class="title font-weight-light">
          We use state of the art<br>
          algorithms to check designs for flaws
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
          Aircraft grade
        </h4>

        <div class="title font-weight-light">
          We produce parts for SpaceX, Lockheed, <br>Boeing, Blue Origin and more!
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
