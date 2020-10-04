<template>
  <v-container
    id="about"
    tag="section"
  >
    <base-subheading
      class="mb-12 primary--text"
      tag="h1"
      title="Our Services"
    />

    <v-container>
      <v-row justify="center">
        <v-col
          v-for="(service, i) in services"
          :key="i"
          cols="12"
          md="6"
        >
          <v-card
            class="mx-auto my-8 text-center"
          >
            <v-img
              :src="require(`@/assets/services/${service.src}?vuetify-preload`)"
              height="320"
              :alt="service.alt"
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
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="headline mt-4">
                  {{ service.title }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-card-text v-html="service.subtitle" />
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <base-subheading
      class="mb-8 primary--text"
      title="Frequently Asked Questions"
    />

    <v-row justify="center">
      <v-col
        v-for="(member, i) in team.slice(5, 6)"
        :key="i"
        class="text-center"
        cols="12"
      >
        <v-expansion-panels focusable>
          <v-expansion-panel
            v-for="(item,j) in faq"
            :key="j"
          >
            <v-expansion-panel-header>{{ item.title }}</v-expansion-panel-header>
            <v-expansion-panel-content>
              {{ item.subtitle }}
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
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
            title="The Fight Against Covid"
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
      title: 'Our Services',
      meta: [{
        vmid: 'description',
        name: 'description',
        content: 'Trupart Manufacturing offers professional manufacturing services including Laser Cutting, Waterjet cutting and 3D printing',
      }],
      meta2: [{
        vmid: 'keywords',
        name: 'keywords',
        content: 'services, manufacturing, waterjet, laser, laser cutting, 3d printing, fabrication, metal working',
      }],
    },
    data: () => ({
      items: [
        {
          color: '#1F7087',
          src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
          title: 'Supermodel',
          artist: 'Foster the People',
        },
        {
          color: '#952175',
          src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
          title: 'Halcyon Days',
          artist: 'Ellie Goulding',
        },
      ],
      faq: [
        { title: '797,054,934', subtitle: 'Total Supply' },
        { title: '2,945,066', subtitle: 'EQL Burnt' },
        { title: '48,385', subtitle: 'Transactions' },
        { title: '18', subtitle: 'Decimals' },
      ],
      services: [
        {
          title: 'Waterjet Cutting',
          subtitle: 'Water cutting for the untypical of sheet metal laser cutting. Thick metal plate, stone, plastics and wood from 3/4 of an inch up to 8". the largest our table can cut is 80x160 inches <br /> High precision typically .003 depending on the thickness and materials., Trupart has been waterjet cutting for over 20 years and familiar with proper cutting techniques ensuring a quality cut on hard to machine materials. Garolite, carbon fiber, laminates and glass are no match for our machinists and table',
          src: 'waterjet.jpg',
          alt: 'waterjet cutting aluminum',
        },
        {
          title: 'Laser Cutting',
          subtitle: 'Our laser is capable of cutting up to 3/4 of an inch steel plate with a smoot surface. Aluminum and stainless we go up to half-inch. Anything thicker we put in our high precision waterjet. Nitrogen is our assist gas of choice. It\'s a little more expensive to run but cuts faster, leaves no oxide to grind off and chip power coat, plus it looks amazing!',
          src: 'lasercutting.jpg',
          alt: 'waterjet cutting metal',
        },
        {
          title: 'Fabrication',
          subtitle: 'We don\'t stop at just blanking your parts. Full on-site fabrication so we can control every aspect of your parts. Parts stay safe in our factory, where you can track it on our one of a kind TruTrack job scheduling board. See where your job is in the factory, check out some shop talk, see updates of pictures, questions employees have for the office, just don\'t ask us to anodize stainless, you might read about it in the comments of the card',
          src: 'fabrication.jpg',
          alt: 'welder welding metal',
        },
        {
          title: 'Metal Stamping',
          subtitle: 'Metal Stamping our found Karl Schlosser's bread and butter. Machines cast in metal, built to last century\'s like heirlooms, typical of that generations quality. One we strive to achieve by the minute<br />Time-tested, reject rates of 0.02 consistently for 46 years, we make mistakes, the numbers don\'t lie though. It\'s rare, we don\'t charge enough to do the job twice<br />Brilliant people making quality parts with engineers who can build rockets, cars, or whatever is called upon. Quite frankly, they have built all that and I'm sure other items that are so top secret we\'d be shot if we knew',
          src: 'stamping.jpg',
          alt: 'Many stamped copper pieces',
        },
        {
          title: 'Production 3D printing/3D Scanning',
          subtitle: 'A revolution is on the horizon. Parts made overnight, in quantities that will blow your mind. 100\'s of parts manufactured overnight by machines that require no tooling <br />Impossible? Not anymore. At Trupart, we have developed a proprietary process that allows us to 3D print difficult geometries, in exotic materials that your big 3 print corporations cannot offer. Our exclusive part finishing strengthens and smooths 3d printed parts closing the gap on injection molding.<br />Do you like spending 10s of thousands of dollars on tooling and waiting 3 month, then sending back to touch it up because it was off a couple thou?<br />Well your dream has come tru. Produce3D our inhouse 3D print factory is prepared for your production parts. Multiheaded printers producing hundreds of parts a day. <br /> Flame retardant ABS certed to FAR 25.843, FDA nylon and PETG for food packaging. Just some of our certed materials prepared for your production, or emergency. You can load any cad model to our online instant quote engine and get going yesterday',
          src: '3d.jpg',
          alt: '3D Printers',
        },
        {
          title: 'Design and Engineering',
          subtitle: '3D Scanners and printers with more software than any one shop needs, engineers who have scrapped out more parts in their life it would make you think twice, and fabricators who do their job like their life depended on it. A recipe, that is no secret, develops <br />Time is a testament of engineers and fabricators. You wont hold long in this industry with bubble gum welds, scratches all over the sheet metal, bend radius nowhere near, and engineering calling out for anno stainless. We have seen it all and contributed our part to it as well, a long time ago in a galaxy far far away',
          src: 'laser.jpg',
          alt: 'Engineer testing designs',
        },
        {
          title: 'Polishing',
          subtitle: 'It\'s rare finding a good polisher these days. Expensive, long lead times, and sometimes you got to send it back. Well, we do polishing in house <br /> Quality polishing by picky people. Comets, streaks we understand what you need. Been making parts for artists and medical devices for many years. If you can meet that muster you have the green light.<br />Mill Non directional #8 is a beautiful thing, but it needs to be handled correctly. The right film, with the right adhesive, carefully handled so your expensive, soon to be your problem is in mint condition, ready for a blinding experience<br /> Parts fabricated and polished in the same place. We have no one to blame if you don\'t like it',
          src: 'polish.jpg',
          alt: 'perfectly polished metal',
        },
      ],
      stats: [
        { title: '20,000,000+', subtitle: 'Parts Manufactured' },
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
          name: 'Mary Murillo',
          src: 'https://randomuser.me/api/portraits/women/54.jpg',
          pos: 'Founder & CEO',
          blurb: 'Cras risus ipsum faucibus ut nullam quis ante',
        },
        {
          name: 'Shane Prukop',
          src: 'https://randomuser.me/api/portraits/men/34.jpg',
          pos: 'Co-founder & CTO',
          blurb: 'Cras risus ipsum faucibus ut nullam',
        },
        {
          name: 'Stephen Wall',
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
