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
          Our team has over 200 years of experience. Spanning so many skill sets and overlapping in many, you have several people watching out over your components who have spent their lives in this industry. Multifaceted veterans hand-selected, highly sought after, loyal to the standards or founder Karl Schlosser built into our foundation 46 years ago. Old school work ethic and practices, modern software and equipment.
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

    metaInfo: {
      // title will be injected into parent titleTemplate
      title: 'About Us',
      meta: [{
        vmid: 'description',
        name: 'description',
        content: 'An about page for trupart manufacturing',
      }],
    },

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
          name: 'Shane Prukop',
          src: '/Users/shaneprukop/Dev/trupart/src/assets/team',
          pos: 'Founder & CEO',
          blurb: '3rd generation. Push, Pull, whatever it takes to Support our World Class Crew, 20+ years in the Industry',
        },
        {
          name: 'Ingrid Boehm',
          src: '/Users/shaneprukop/Dev/trupart/src/assets/team',
          pos: '40 Years in business management,maintains foundational business practice.',
          blurb: '',
        },
        {
          name: 'Stephen Wall',
          src: 'https://randomuser.me/api/portraits/men/14.jpg',
          pos: 'Shop Foreman',
          blurb: 'Leveraging 40+ years in manufacturing,developes processs to ensure quality, safety and speed. ',
        },
        {
          name: 'Mary Murillo',
          src: 'https://randomuser.me/api/portraits/women/27.jpg',
          pos: 'Office Manager',
          blurb: 'Over 40 Years Mary has been the foundation to every job, knowing every process ensuring parts from the bigging mmet spec.',
        },
        {
          name: 'David Cisneros',
          src: 'https://randomuser.me/api/portraits/men/27.jpg',
          pos: 'Quality Control',
          blurb: 'Starting on the Waterjet, David has worked his way up making quality parts, and now inspects them. ',
        },
        {
          name: 'Ozwaldo Topete',
          src: 'https://randomuser.me/api/portraits/women/6.jpg',
          pos: 'Blanking Technician',
          blurb: 'Master of mamny machines, know by customers as laser ninja sword for his relentless persuit for edge quality and job batching.',
        },
        {
          name: 'Miguel Monroy',
          src: 'https://randomuser.me/api/portraits/men/41.jpg',
          pos: 'Designer',
          blurb: 'A true legend in manufacturing, 25 years plus of sheet metal, he utilizes the latest in tech to make bends, that shouldnt have been birthed.',
        },
        {
          name: 'Fabian Martinez-Mireles ',
          src: 'https://randomuser.me/api/portraits/men/41.jpg',
          pos: 'Expedite',
          blurb: 'Thorough, detailed, consistant,accurate, all of the quaolities sought after, with none of the bad habits. A future in manufactuing.',
        },
      ],
    }),
  }
</script>
