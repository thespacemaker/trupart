<template>
  <v-container
    id="about"
    tag="section"
  >
    <base-subheading
      class="mb-12 primary--text"
      tag="h1"
      title="Our Mission Statement"
    />

    <v-row
      class="mb-12"
      justify="center"
    >
      <v-col
        cols="12"
        md="7"
        class="headline font-weight-light"
      >
        <p>
          Etiam ut purus mattis mauris sodales aliquam. Aenean ut eros et nisl sagittis vestibulum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus a est. Ut non enim eleifend felis pretium feugiat.
        </p>

        <p>
          Etiam ut purus mattis mauris sodales aliquam. Aenean ut eros et nisl sagittis vestibulum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus a est. Ut non enim eleifend felis pretium feugiat.
        </p>

        <p>
          Etiam ut purus mattis mauris sodales aliquam. Aenean ut eros et nisl sagittis vestibulum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus a est. Ut non enim eleifend felis pretium feugiat.
        </p>

        <p>
          Etiam ut purus mattis mauris sodales aliquam. Aenean ut eros et nisl sagittis vestibulum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus a est. Ut non enim eleifend felis pretium feugiat.
        </p>
      </v-col>
    </v-row>

    <base-subheading
      class="mb-8 primary--text"
      title="Leadership"
    />

    <v-row
      class="mb-12"
      justify="center"
    >
      <v-col
        v-for="(member, i) in team.slice(0, 3)"
        :key="i"
        class="text-center"
        cols="12"
        md="4"
      >
        <v-avatar
          class="mb-4"
          size="140"
        >
          <v-img :src="member.src" />
        </v-avatar>

        <h3
          class="headline primary--text"
          v-text="member.name"
        />

        <div
          class="text-uppercase subtitle-1 font-weight-bold"
          v-text="member.pos"
        />

        <div
          class="subtitle-1 font-weight-light grey--text text--darken-1 mx-auto"
          style="max-width: 250px;"
          v-text="member.blurb"
        />
      </v-col>
    </v-row>

    <base-subheading
      class="mb-8 primary--text"
      title="Outreach"
    />

    <v-row
      class="mb-12"
      justify="center"
    >
      <v-col
        v-for="(member, i) in team.slice(3, 5)"
        :key="i"
        class="text-center"
        cols="12"
        md="4"
      >
        <v-avatar
          class="mb-4"
          size="140"
        >
          <v-img :src="member.src" />
        </v-avatar>

        <h3
          class="headline primary--text"
          v-text="member.name"
        />

        <div
          class="text-uppercase subtitle-1 font-weight-bold"
          v-text="member.pos"
        />

        <div
          class="subtitle-1 font-weight-light grey--text text--darken-1 mx-auto"
          style="max-width: 250px;"
          v-text="member.blurb"
        />
      </v-col>
    </v-row>

    <base-subheading
      class="mb-8 primary--text"
      title="Advisor"
    />

    <v-row justify="center">
      <v-col
        v-for="(member, i) in team.slice(5, 6)"
        :key="i"
        class="text-center"
        cols="12"
        md="4"
      >
        <v-avatar
          class="mb-4"
          size="140"
        >
          <v-img :src="member.src" />
        </v-avatar>

        <h3
          class="headline primary--text"
          v-text="member.name"
        />

        <div
          class="text-uppercase subtitle-1 font-weight-bold"
          v-text="member.pos"
        />

        <div
          class="subtitle-1 font-weight-light grey--text text--darken-1 mx-auto"
          style="max-width: 250px;"
          v-text="member.blurb"
        />
      </v-col>
    </v-row>

    <v-container>
      <v-row class="pt-12">
        <v-col
          cols="12"
          md="6"
        >
          <base-info-card
            :stats="stats"
            color="#FA6F9E"
            dark
            title="Blockchain Data"
            width="100%"
          />
        </v-col>
        <v-col
          cols="12"
          md="6"
        >
          <base-info-card
            :stats="stats2"
            color="secondary"
            dark
            title="Price Statistics"
            width="100%"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
  export default {
    name: 'AboutIndex',

    data: () => ({
      stats: [
        { title: '797,054,934', subtitle: 'Total Supply' },
        { title: '2,945,066', subtitle: 'EQL Burnt' },
        { title: '48,385', subtitle: 'Transactions' },
        { title: '18', subtitle: 'Decimals' },
      ],
      stats2: [
        { title: '$0.0018', subtitle: 'USD Price' },
        { title: '$582,457', subtitle: 'Market Cap' },
        { title: '$546', subtitle: '24H Volume' },
        { title: '6.27%', subtitle: '24H Change' },
      ],
      team: [
        {
          name: 'Susan Crocket',
          src: 'https://randomuser.me/api/portraits/women/54.jpg',
          pos: 'Founder & CEO',
          blurb: 'Cras risus ipsum faucibus ut nullam quis ante',
        },
        {
          name: 'James Crocket',
          src: 'https://randomuser.me/api/portraits/men/34.jpg',
          pos: 'Co-founder & CTO',
          blurb: 'Cras risus ipsum faucibus ut nullam',
        },
        {
          name: 'Jason Zimmer',
          src: 'https://randomuser.me/api/portraits/men/14.jpg',
          pos: 'Lead Developer',
          blurb: 'Cras risus ipsum faucibus ut nullam quis',
        },
        {
          name: 'Ashley Lively',
          src: 'https://randomuser.me/api/portraits/women/27.jpg',
          pos: 'Social Media Liason',
          blurb: 'Cras risus ipsum faucibus ut nullam quis ante, nullam quis ante',
        },
        {
          name: 'Jake Grot',
          src: 'https://randomuser.me/api/portraits/men/27.jpg',
          pos: 'Community Manager',
          blurb: 'Cras risus ipsum faucibus ut nullam quis ante, nullam quis ante',
        },
        {
          name: 'Stacey Wagner',
          src: 'https://randomuser.me/api/portraits/women/6.jpg',
          pos: 'Project Manager',
          blurb: 'Cras risus ipsum faucibus ut nullam quis ante',
        },
        {
          name: 'Jason Anderson',
          src: 'https://randomuser.me/api/portraits/men/41.jpg',
          pos: 'Designer',
          blurb: 'Cras risus ipsum faucibus ut nullam quis ante',
        },
      ],
    }),
  }
</script>
