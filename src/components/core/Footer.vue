<template>
  <div id="footer">
    <img
      :src="require('@/assets/art/blob-bottom-desktop.png')"
      class="hidden-sm-and-down"
      width="100%"
    >

    <v-footer
      class="grey--text transparent px-0 px-md-6 text-center text-md-left"
      height="auto"
    >
      <v-row class="mx-0">
        <v-col
          cols="12"
          md="4"
        >
          <div class="headline font-weight-bold primary--text mb-6 d-inline-flex align-center">
            <v-avatar
              class="mr-3"
            >
              <v-img
                :src="require('@/assets/logo-dark.png')"
                contain
              />
            </v-avatar>
            CRYPTO Coin
          </div>

          <div class="subtitle-1 font-weight-light mb-6 hidden-sm-and-down">
            CRYPTO Coin is being developed by:<br>
            CRYPTO Coin Affiliates LLC (Fort Worth)<br>
            14315 John Doe Parkway<br>
            Texas
          </div>

          <div class="subtitle-1 font-weight-light mb-0 mb-md-8">
            <a
              class="grey--text"
              href="#"
            >Legal Notice</a>
            |
            <a
              class="grey--text"
              href="#"
            >Privacy Policy</a>
          </div>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <div class="headline font-weight-bold primary--text mb-6">
            Sitemap
          </div>
          <router-link
            class="title font-weight-light grey--text d-block mb-4"
            to="/about"
          >
            About
          </router-link>
          <a
            href="#"
            class="title font-weight-light grey--text d-block"
          >
            White Paper
          </a>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-row
            class="text-center"
            :dense="$vuetify.breakpoint.smAndDown"
          >
            <v-col
              v-for="(social, i) in socials"
              :key="i"
              class="mb-6 mb-md-12 text-center"
              cols="3"
            >
              <v-btn
                :small="$vuetify.breakpoint.smAndDown"
                color="white"
                fab
              >
                <v-icon
                  color="primary"
                  v-text="social.icon"
                />
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-footer>
  </div>
</template>

<script>
  export default {
    name: 'CoreFooter',

    data: () => ({
      socials: [
        { icon: 'mdi-facebook-box', href: '#' },
        { icon: 'mdi-twitter', href: '#' },
        { icon: 'mdi-discord', href: '#' },
        { icon: 'mdi-send', href: '#' },
        { icon: 'mdi-reddit', href: '#' },
        { icon: 'mdi-bitcoin', href: '#' },
        { icon: 'mdi-youtube', href: '#' },
        { icon: 'mdi-medium', href: '#' },
      ],
    }),
  }
</script>

<style lang="sass">
  #footer
    a
      text-decoration: none

    img
      position: absolute
      bottom: 0
      right: 0
      left: 0
      height: 500px
      opacity: .05

    @media screen and (min-width: 960px)
      margin-top: 200px
</style>
