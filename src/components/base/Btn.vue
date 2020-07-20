<script>
  // Extensions
  import VBtn from 'vuetify/lib/components/VBtn/VBtn'

  export default {
    name: 'Btn',

    extends: VBtn,

    props: {
      alt: {
        type: Boolean,
        default: false,
      },
      color: {
        type: String,
        default: 'primary',
      },
      dark: {
        type: Boolean,
        default: true,
      },
      elevation: {
        type: VBtn.options.props.elevation.type,
        default: 6,
      },
    },

    computed: {
      classes () {
        return {
          ...VBtn.options.computed.classes.call(this),
          'text-capitalize': true,
        }
      },
    },
  }
</script>
