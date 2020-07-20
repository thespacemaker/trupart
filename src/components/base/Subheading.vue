<template>
  <div
    :class="`text-${left ? 'left' : right ? 'right' : 'center'}`"
    class="subheading"
  >
    <component
      :is="tag"
      :class="$vuetify.breakpoint.mdAndUp ? 'display-2' : 'display-1'"
      class="font-weight-bold mb-6"
      v-text="title"
    />
    <div
      :class="$vuetify.breakpoint.mdAndUp ? 'headline' : 'title'"
      class="font-weight-light"
      v-text="subtitle"
    />
  </div>
</template>

<script>
  export default {
    name: 'Subheading',

    props: {
      left: {
        type: Boolean,
        default: false,
      },
      right: {
        type: Boolean,
        default: false,
      },
      tag: {
        type: String,
        default: 'h2',
      },
      title: {
        type: String,
        default: '',
      },
      subtitle: {
        type: String,
        default: '',
      },
    },
  }
</script>

<style lang="sass">
  .subheading
    margin: 0 auto
    max-width: 500px
</style>
