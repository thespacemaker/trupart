<script>
  // Extensions
  import VCard from 'vuetify/lib/components/VCard/VCard'

  export default {
    name: 'Card',

    extends: VCard,

    props: {
      elevation: {
        type: VCard.options.props.elevation.type,
        default: 24,
      },
    },
  }
</script>
