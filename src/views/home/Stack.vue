<template>
  <v-container
    id="stack"
    tag="section"
  >
    <base-card
      class="mx-auto pa-12"
      color="primary"
      dark
      width="900"
      max-width="90%"
    >
      <base-subheading
        subtitle="Competitor analysis"
        title="How We Stack Up"
      />
    </base-card>

    <base-card
      class="mt-n4 mx-auto pa-6"
      max-width="1100"
    >
      <v-simple-table>
        <thead>
          <tr>
            <th />
            <template
              v-for="(logo, i) in logos"
            >
              <th
                v-if="i < 3 || $vuetify.breakpoint.mdAndUp"
                :key="logo"
                class="pt-3"
              >
                <v-avatar
                  size="40"
                  color="transparent"
                >
                  <v-img
                    :src="logo"
                    contain
                  />
                </v-avatar>
              </th>
            </template>
          </tr>

          <tr>
            <th>
              Services
            </th>
            <th>
              TrupartMfg
            </th>
            <th>
              CNC Shop
            </th>
            <th>
              Sheetmetal
            </th>
            <template v-if="$vuetify.breakpoint.mdAndUp">
              <th>
                Punch Press House
              </th>
              <th>
                Fabrication/Welding Shop
              </th>
            </template>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>CAD/CAM</td>
            <td><check /></td>
            <td><check /></td>
            <td><check /></td>
            <template v-if="$vuetify.breakpoint.mdAndUp">
              <td><check /></td>
              <td><check /></td>
            </template>
          </tr>

          <tr>
            <td>Enginerring Support</td>
            <td><check /></td>
            <td><check /></td>
            <td />
            <template v-if="$vuetify.breakpoint.mdAndUp">
              <td />
              <td />
            </template>
          </tr>

          <tr>
            <td>Expedited Quotes</td>
            <td><check /></td>
            <td><check /></td>
            <td />
            <template v-if="$vuetify.breakpoint.mdAndUp">
              <td><check /></td>
              <td><check /></td>
            </template>
          </tr>

          <tr>
            <td>Consultations over Zoom and VR</td>
            <td><check /></td>
            <td><check /></td>
            <td />
            <template v-if="$vuetify.breakpoint.mdAndUp">
              <td />
              <td />
            </template>
          </tr>

          <!-- <tr>
            <td>DAPP and DEX store</td>
            <td><check /></td>
            <td />
            <td><check /></td>
            <template v-if="$vuetify.breakpoint.mdAndUp">
              <td />
              <td />
            </template>
          </tr> -->

          <!-- <tr>
            <td>Automatically update<br> new tokens to your<br> portfolio</td>
            <td><check /></td>
            <td />
            <td />
            <template v-if="$vuetify.breakpoint.mdAndUp">
              <td />
              <td><check /></td>
            </template>
          </tr> -->

          <!-- <tr>
            <td>Send all ERC-20 tokens<br> without the use of 3rd<br> party websites</td>
            <td><check /></td>
            <td />
            <td />
            <template v-if="$vuetify.breakpoint.mdAndUp">
              <td />
              <td />
            </template>
          </tr>
          <tr /> -->
        </tbody>

        <!-- <tfoot class="hidden-sm-and-down">
          <tr>
            <th class="headline font-weight-bold py-6">
              Market Cap.
            </th>
            <td>
              <base-btn
                alt
                color="primary"
                elevation="0"
              >
                $584K
              </base-btn>
            </td>
            <td />
            <td />
            <td>
              <base-btn
                alt
                color="primary"
                elevation="0"
              >
                $20M
              </base-btn>
            </td>
            <td>
              <base-btn
                alt
                color="primary"
                elevation="0"
              >
                $25M
              </base-btn>
            </td>
          </tr>
        </tfoot> -->
      </v-simple-table>
    </base-card>
  </v-container>
</template>

<script>
  export default {
    name: 'HomeStack',

    components: {
      Check: {
        render (h) {
          return h('v-avatar', {
            props: {
              color: '#46D5D1',
              size: 24,
            },
          }, [h('v-icon', { props: { small: true, dark: true } }, 'mdi-check')])
        },
      },
    },

    data: () => ({
      logos: [
        require('@/assets/logo-dark.png'),
        require('@/assets/competitors/cnc.png'),
        require('@/assets/competitors/sheet.jpg'),
        require('@/assets/competitors/pressbrake.png'),
        require('@/assets/competitors/welding.png'),
      ],
    }),
  }
</script>

<style lang="sass">
  #stack
    th, td
      text-align: center
      font-size: 1rem

      &:first-child
        text-align: left

    th
      color: rgba(0, 0, 0, .7)
      font-weight: 900

    td
      color: rgba(0, 0, 0, .5)
      font-weight: 500
</style>
