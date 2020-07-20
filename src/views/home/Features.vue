<template>
  <v-container
    id="features"
    tag="section"
  >
    <base-subheading
      class="mb-12"
      subtitle="Blockchain made simple."
      title="Your New Home"
    />

    <v-row align="center">
      <v-col
        cols="12"
        md="6"
      >
        <base-subheading
          :left="$vuetify.breakpoint.mdAndUp"
          subtitle="We calculate the best gas price upon order purchase. Just click Send."
          title="Premium Transactions"
        />
      </v-col>

      <v-col>
        <base-img-card :src="require('@/assets/features/2.jpg')" />
      </v-col>
    </v-row>

    <v-row
      align="center"
      class="flex-row-reverse"
    >
      <v-col
        cols="12"
        md="6"
      >
        <base-subheading
          :right="$vuetify.breakpoint.mdAndUp"
          subtitle="Desktop, Laptop, or Mobile—CRYPTO Coin has you covered"
          title="Responsive Dashboard"
        />
      </v-col>

      <v-col>
        <base-img-card :src="require('@/assets/features/3.jpg')" />
      </v-col>
    </v-row>

    <v-row align="center">
      <v-col
        cols="12"
        md="6"
      >
        <base-subheading
          :left="$vuetify.breakpoint.mdAndUp"
          subtitle="Anytime, anywhere—The power of CRYPTO is at your fingertips."
          title="Complete Control"
        />
      </v-col>

      <v-col>
        <base-img-card :src="require('@/assets/features/4.jpg')" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'HomeFeatures',
  }
</script>
