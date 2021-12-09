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
          <v-img
            :src="require(`@/assets/team/${member.src}?vuetify-preload`)"
          >
            <template v-slot:placeholder>
              <v-row
                class="fill-height ma-0"
                align="center"
                justify="center"
              >
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                />
              </v-row>
            </template>
          </v-img>
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
          <v-img
            :src="require(`@/assets/team/${member.src}?vuetify-preload`)"
          >
            <template v-slot:placeholder>
              <v-row
                class="fill-height ma-0"
                align="center"
                justify="center"
              >
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                />
              </v-row>
            </template>
          </v-img>
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

<!--    -->

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
          <v-img
            :src="require(`@/assets/team/${member.src}?vuetify-preload`)"
          >
            <template v-slot:placeholder>
              <v-row
                class="fill-height ma-0"
                align="center"
                justify="center"
              >
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                />
              </v-row>
            </template>
          </v-img>
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
            title="Business Stats"
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
            title="The Fight Against COVID"
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
      title: 'About',
      meta: [{
        vmid: 'description',
        name: 'description',
        content: 'An about page for trupart manufacturing',
      }],
    },

    data: () => ({
      stats: [
        { title: '2 Million+', subtitle: 'Parts Manufactured' },
        { title: '3', subtitle: 'Generations Family Owned' },
        { title: '47', subtitle: 'Years in Business' },
        { title: '200+', subtitle: 'Years of Experience' },
      ],
      stats2: [
        { title: '2000', subtitle: 'Face Shields Produced' },
        { title: '2000', subtitle: 'Face Shields Donated' },
        { title: '100s', subtitle: 'Hours of time' },
        { title: '7', subtitle: 'Open Source Contributions' },
      ],
      team: [
        {
          name: 'Ingrid Boehm',
          src: 'ingrid.png',
          pos: 'Business Manager',
          blurb: '40 Years in business management, maintains foundational business practice.',
        },
        {
          name: 'Shane Prukop',
          src: 'workavatar.jpg',
          pos: 'Founder & CEO',
          blurb: '3rd generation. Push, Pull, whatever it takes to Support our World Class Crew, 20+ years in the Industry',
        },
        // {
        //   name: 'Stephen Wall',
        //   src: 'steve.png',
        //   pos: 'Shop Foreman',
        //   blurb: 'Leveraging 40+ years in manufacturing,developes processs to ensure quality, safety and speed. ',
        // },
        {
          name: 'Mary Murillo',
          src: 'Mary.png',
          pos: 'Office Manager',
          blurb: 'Over 40 Years Mary has been the foundation to every job, knowing every process ensuring parts from the bigging mmet spec.',
        },
        {
          name: 'David Cisneros',
          src: 'David.png',
          pos: 'Quality Control',
          blurb: 'Starting on the Waterjet, David has worked his way up making quality parts, and now inspects them. ',
        },
        // {
        //   name: 'Ozwaldo Topete',
        //   src: 'ozzy.png',
        //   pos: 'Blanking Technician',
        //   blurb: 'Master of mamny machines, know by customers as laser ninja sword for his relentless persuit for edge quality and job batching.',
        // },
        {
          name: 'Miguel Monroy',
          src: 'miguel.png',
          pos: 'Designer',
          blurb: 'A true legend in manufacturing, 25 years plus of sheet metal, he utilizes the latest in tech to make bends, that shouldnt have been birthed.',
        },
        // {
        //   name: 'Fabian Martinez-Mireles ',
        //   src: 'fabian.png',
        //   pos: 'Expedite',
        //   blurb: 'Thorough, detailed, consistant,accurate, all of the quaolities sought after, with none of the bad habits. A future in manufactuing.',
        // },
      ],
    }),
  }
</script>
