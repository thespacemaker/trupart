<template>
  <v-container
    id="beat"
    class="mb-12"
    tag="section"
    style="z-index: 1; position: relative;"
  >
    <base-subheading
      class="mb-12"
      subtitle="Get the latest information about CRYPTO Coin"
      title="Stay Informed"
    />

    <subscribe
      class="mx-auto"
      max-width="700"
    />
  </v-container>
</template>

<script>
  export default {
    name: 'HomeStayInformed',

    components: {
      Subscribe: () => import('@/components/Subscribe'),
    },
  }
</script>
