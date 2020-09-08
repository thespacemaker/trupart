<template>
  <v-toolbar
    id="core-toolbar"
    color="transparent"
    flat
    height="128"
  >
    <v-toolbar-title class="display-1 font-weight-black d-inline-flex px-0 px-md-8 align-center">
      <router-link
        :class="$route.name !== 'home' ? 'primary--text' : 'white--text'"
        to="/"
      >
        <v-avatar
          class="mr-3"
          size="48"
          tile
        >
          <v-img
            contain
            :src="require(`@/assets/logo${ $route.name !== 'home' ? '-dark' : ''}.png`)"
          />
        </v-avatar>

        <span class="hidden-sm-and-down">
          TruPart&nbsp;<span class="font-weight-light">Manufacturing</span>
        </span>
      </router-link>
    </v-toolbar-title>

    <v-spacer />

    <v-btn
      :dark="$vuetify.breakpoint.smAndDown"
      :icon="$vuetify.breakpoint.smAndDown"
      class="mr-3"
      text
      to="/about"
      x-large
    >
      <span v-if="$vuetify.breakpoint.mdAndUp">
        About
      </span>
    </v-btn>

    <v-btn
      :dark="$vuetify.breakpoint.smAndDown"
      :icon="$vuetify.breakpoint.smAndDown"
      class="mr-3"
      text
      to="/services"
      x-large
    >
      <span v-if="$vuetify.breakpoint.mdAndUp">
        Services
      </span>
    </v-btn>
    <v-btn
      :dark="$vuetify.breakpoint.smAndDown"
      :icon="$vuetify.breakpoint.smAndDown"
      class="mr-3"
      text
      to="/tools"
      x-large
    >
      <span v-if="$vuetify.breakpoint.mdAndUp">
        Tools
      </span>
    </v-btn>
    <v-dialog
      v-model="dialog"
      width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <base-btn
          v-if="$vuetify.breakpoint.mdAndUp"
          :color="$vuetify.breakpoint.mdAndUp ? 'primary' : 'white'"
          :dark="$vuetify.breakpoint.smAndDown"
          :fab="$vuetify.breakpoint.smAndDown"
          :min-height="$vuetify.breakpoint.mdAndUp ? 64 : undefined"
          :min-width="$vuetify.breakpoint.mdAndUp ? 175 : undefined"
          :x-large="$vuetify.breakpoint.mdAndUp"
          class="mr-3"
          v-bind="attrs"
          v-on="on"
        >
          <span>
            Get a Quote
          </span>
        </base-btn>
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
    <v-icon
      v-if="$vuetify.breakpoint.smAndDown"
      color="primary"
      @click.stop="onClickButton"
    >
      mdi-menu
    </v-icon>
  </v-toolbar>
</template>

<script>
  export default {
    name: 'CoreToolbar',
    data: () => ({
      drawer: false,
      dialog: false,
      items: [
        { title: 'Home', icon: 'dashboard' },
        { title: 'About', icon: 'question_answer' },
        { title: 'Tools', icon: 'question_answer' },
      ],
    }),
    methods: {
      onClickButton (event) {
        console.log('navigation clicked')
        console.log(this.drawer)
        this.drawer = !this.drawer
        this.$emit('clicked', this.drawer)
      },
    },
  }
</script>

<style lang="sass">
  #core-toolbar
    a
      text-decoration: none

</style>
