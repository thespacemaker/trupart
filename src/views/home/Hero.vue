<template>
  <v-container
    id="hero"
    class="px-0"
    tag="section"
    :class="$vuetify.breakpoint.smAndDown && 'pt-0'"
  >
    <v-responsive
      class="overflow-visible"
      min-height="50vh"
    >
      <v-row
        align="center"
        align-content="center"
        class="fill-height mx-0"
        justify="space-around"
      >
        <v-slide-x-transition
          v-if="$vuetify.breakpoint.mdAndUp"
          appear
        >
          <v-col
            cols="12"
            md="6"
          >
            <base-img-card :src="require('@/assets/features/1.jpg')" />
          </v-col>
        </v-slide-x-transition>

        <v-slide-x-reverse-transition appear>
          <v-col cols="auto">
            <h1
              class="font-weight-bold"
              :class="[$vuetify.breakpoint.smAndDown ? 'display-2 white--text' : 'display-4']"
            >
              TruPart <span class="font-weight-light">Manufacturing</span>
            </h1>

            <div
              class="grey--text mb-md-12 mb-6"
              :class="[$vuetify.breakpoint.smAndDown ? 'headline text--lighten-1' : 'display-1']"
            >
              Quality Manufacturing for over <em>67 years.</em>
            </div>
            <br class="hidden-md-and-up">
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
          </v-col>
        </v-slide-x-reverse-transition>

        <v-slide-y-reverse-transition appear>
          <v-col
            class="mt-12"
            cols="12"
          >
            <base-card class="pa-12">
              <v-row class="text-center">
                <v-col
                  v-for="(highlight, i) in highlights"
                  :key="i"
                  cols="12"
                  md="4"
                >
                  <v-img
                    :src="require(`@/assets/highlights/${highlight.src}`)"
                    class="mb-8"
                    contain
                    max-height="200"
                    width="100%"
                  />

                  <h2
                    class="headline font-weight-bold mb-6"
                    v-text="highlight.title"
                  />

                  <v-responsive
                    max-width="256"
                    class="grey--text body-1 mx-auto"
                    v-text="highlight.text"
                  />
                </v-col>
              </v-row>
            </base-card>
          </v-col>
        </v-slide-y-reverse-transition>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script>
  export default {
    name: 'HomeHero',

    data: () => ({
      dialog: false,
      highlights: [
        {
          src: '1.png',
          title: 'Design',
          text: 'Need help with product design? Trupart has skilled engineers on site that can help you with any of your design woes.',
        },
        {
          src: '2.png',
          title: 'Prototype',
          text: 'With 3D printing and rapid prototyping capabilities we can create custom tooling and specialized manufacturing processes to rapidly build your prototypes',
        },
        {
          src: '3.png',
          title: 'Fabrication and Production',
          text: 'We have manufactured over 20,000,000 parts. Trupart can handle your manufacturing and production needs no matter the scale!',
        },
      ],
    }),
  }
</script>
