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
              CRYPTO <span class="font-weight-light">Coin</span>
            </h1>

            <div
              class="grey--text mb-md-12 mb-6"
              :class="[$vuetify.breakpoint.smAndDown ? 'headline text--lighten-1' : 'display-1']"
            >
              Secure wallet transfers, <em>today</em>
            </div>

            <base-btn
              height="64"
              block
              class="title"
            >
              Sign Up Now
            </base-btn>
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
      highlights: [
        {
          src: '1.png',
          title: 'Smooth Sailing',
          text: 'A wallet crafted to reduce the steep learning curve of the blockchain.',
        },
        {
          src: '2.png',
          title: 'Decentralized',
          text: 'We believe in the importance of a decentralized future, that’s why we want to bring the blockchain to the 99%.',
        },
        {
          src: '3.png',
          title: 'Web3 Injection',
          text: 'Cutting edge tech, that makes interacting with the Ethereum blockchain seamless.',
        },
      ],
    }),
  }
</script>
