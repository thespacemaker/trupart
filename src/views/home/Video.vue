<template>
  <v-container
    id="video"
    tag="section"
    class="px-3"
  >
    <base-subheading
      class="mb-12"
      subtitle="Sit back and enjoy."
      title="CRYPTO in 60 Seconds"
    />

    <base-card
      class="mx-auto"
      height="400"
      max-width="800"
    >
      <iframe
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        frameborder="0"
        height="100%"
        src="https://www.youtube.com/embed/IWeCQkIJNkY"
        width="100%"
      />
    </base-card>
  </v-container>
</template>

<script>
  export default {
    name: 'HomeVideo',
  }
</script>
