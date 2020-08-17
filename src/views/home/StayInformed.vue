<template>
  <v-container
    id="beat"
    class="mb-12"
    tag="section"
    style="z-index: 1; position: relative;"
  >
    <base-subheading
      class="mb-12"
      subtitle="Get started on your quote today"
      title="Get a Quote!"
    />

    <!-- <subscribe
      class="mx-auto"
      max-width="700"
    /> -->
    <v-dialog
      v-model="dialog"
      width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <base-btn
          height="64"
          block
          class="title"
          v-bind="attrs"
          v-on="on"
        >
          Get a Quote Now
        </base-btn>
        <!-- <v-btn
          color="primary"
          dark

        >
          Open Dialog
        </v-btn> -->
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Fill out the form below to get a quote!</span>
        </v-card-title>
        <p style="text-align: center;">
          <iframe
            style="width: 600px; height: 1500px;"
            src="https://rfq.digital-quote.com/rfq/index.html?supplier_id=865591b2d73e47c191179bedc15b14a6"
            no-resize-detection
          />
        </p>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
  export default {
    name: 'HomeStayInformed',

    components: {
      // Subscribe: () => import('@/components/Subscribe'),
    },
  }
</script>
