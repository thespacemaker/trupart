<template>
  <v-container
    id="features"
    tag="section"
  >
    <base-subheading
      class="mb-12"
      subtitle="Expert Metal Fabrication, Made in the USA."
      title="Industry Leading"
    />

    <v-row align="center">
      <v-col
        cols="12"
        md="6"
      >
        <base-subheading
          :left="$vuetify.breakpoint.mdAndUp"
          subtitle="Our team has over 200 years of experience. Spanning so many skill sets and overlapping in many, you have several people watching out over your components who have spent their lives in this industry. Multifaceted veterans hand-selected, highly sought after, loyal to the standards or founder Karl Schlosser built into our foundation 46 years ago. Old school work ethic and practices, modern software and equipment."
          title="200+ Years Experience"
        />
      </v-col>
      <v-lazy
        v-model="isActive"
        :options="{
          threshold: .5
        }"
        min-height="200"
        transition="fade-transition"
      >
      <v-col>
        <base-img-card :src="require('@/assets/features/2.jpg')" />
      </v-col>
      </v-lazy>
    </v-row>

    <v-lazy
      v-model="isActive"
      :options="{
        threshold: .5
      }"
      min-height="200"
      transition="fade-transition"
    >
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
          subtitle="Our sheet metal team, metal fabricators, laser cutting ninjas, punch press techs, picky quality control, press break wizards, waterjet wonders, sensational shippers, kind, smart and funny front office will attend to your needs, make high quality, well thought out manufactured parts quickly!"
          title="Your Ideas, From Scratch"
        />
      </v-col>

      <v-col>
        <base-img-card :src="require('@/assets/features/3.jpg?vuetify-preload')" />
      </v-col>
    </v-row>
    </v-lazy>
    <v-row align="center">
      <v-col
        cols="12"
        md="6"
      >
        <base-subheading
          :left="$vuetify.breakpoint.mdAndUp"
          subtitle="From aluminum, to steel, to polymers and plastics, we can bring your creation to life today!"
          title="Complete Control"
        />
      </v-col>

      <v-col>
        <base-img-card :src="require('@/assets/features/4.jpg?vuetify-preload')" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'HomeFeatures',
  }
</script>
