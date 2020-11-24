<template>
  <v-card>
    <h2 class="mx-4 mt-5">
      Metal Specifications
    </h2>
    <h3 class="ma-4">
      Steels
    </h3>
    <v-expansion-panels inset>
      <v-expansion-panel
        v-for="(item,i) in carbonSteelData"
        :key="i"
      >
        <v-expansion-panel-header>{{ item.title }}</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-data-table
            :headers="headers"
            :items="item.items"
            hide-default-footer
            class="elevation-1"
          />
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>

    <v-expansion-panels inset>
      <v-expansion-panel
        v-for="(item,i) in lowAlloySteelData"
        :key="i"
      >
        <v-expansion-panel-header>{{ item.title }}</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-data-table
            :headers="headers"
            :items="item.items"
            hide-default-footer
            class="elevation-1"
          />
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>

    <v-expansion-panels inset>
      <v-expansion-panel
        v-for="(item,i) in stainlessSteelData"
        :key="i"
      >
        <v-expansion-panel-header>{{ item.title }}</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-data-table
            :headers="headers"
            :items="item.items"
            hide-default-footer
            class="elevation-1"
          />
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <h3 class="ma-4">
      Other
    </h3>
    <v-expansion-panels inset>
      <v-expansion-panel
        v-for="(item,i) in AluminumData"
        :key="i"
      >
        <v-expansion-panel-header>{{ item.title }}</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-data-table
            :headers="headers"
            :items="item.items"
            hide-default-footer
            class="elevation-1"
          />
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>

    <v-expansion-panels inset>
      <v-expansion-panel
        v-for="(item,i) in CopperData"
        :key="i"
      >
        <v-expansion-panel-header>{{ item.title }}</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-data-table
            :headers="headers"
            :items="item.items"
            hide-default-footer
            class="elevation-1"
          />
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-card>
</template>

<script>
  export default {
    name: 'Specs',

    data: () => ({
      headers: [
        {
          text: 'Material',
          align: 'start',
          value: 'title',
        },
        { text: 'Condition', value: 'condition' },
        { text: 'Yield Tensile Strength (ksi)', value: 'yts' },
        { text: 'Ultimate Tensile Strength (ksi)', value: 'uts' },
        { text: 'Elongation at Break (%)', value: 'eb' },
        { text: 'Brinell Hardness (RB)', value: 'bh' },
        { text: 'Elastic Modulus (psi)', value: 'sm' },
        { text: 'Density (lb/in3)', value: 'density' },
        { text: 'Poisson\'s Ratio', value: 'pr' },
      ],
      carbonSteelData: [
        {
          title: 'Carbon Steel',
          items: [
            {
              title: 'AISI 1020',
              condition: 'Hot Rolled',
              yts: 32,
              uts: 50,
              eb: 25,
              sm: 29e6,
              density: 0.283,
              pr: 0.32,
            },
            {
              title: 'AISI 1020',
              condition: 'Cold Worked',
              yts: 60,
              uts: 70,
              eb: 5,
              sm: 29e6,
              density: 0.283,
              pr: 0.32,
            },
            {
              title: 'AISI 1020',
              condition: 'Stress Relieved',
              yts: 32,
              uts: 50,
              eb: 25,
              sm: 29e6,
              density: 0.283,
              pr: 0.32,
            },
            {
              title: 'AISI 1045',
              condition: 'Annealed',
              yts: 32,
              uts: 50,
              eb: 25,
              sm: 29e6,
              density: 0.283,
              pr: 0.32,
            },
            {
              title: 'AISI 1045',
              condition: 'Normalized',
              yts: 32,
              uts: 50,
              eb: 25,
              sm: 29e6,
              density: 0.283,
              pr: 0.32,
            },
            {
              title: 'ASTM A36',
              condition: '',
              yts: 38,
              uts: 58,
              eb: 21,
              sm: 29e6,
              density: 0.283,
              pr: 0.03,
            },
            {
              title: 'ASTM A516',
              condition: 'Grade 70',
              yts: 32,
              uts: 50,
              eb: 17,
              sm: 29e6,
              density: 0.283,
              pr: 0.03,
            },
          ],
        },
      ],
      lowAlloySteelData: [
        {
          title: 'Low Alloy Steel Materials',
          items: [
            {
              title: 'AISI 4130',
              condition: 'Hot Rolled',
              yts: 70,
              uts: 90,
              eb: 20,
              sm: 29e6,
              density: 0.283,
              pr: 0.32,
            },
            {
              title: 'AISI 4130',
              condition: 'Stress Relieved',
              yts: 85,
              uts: 105,
              eb: 10,
              sm: 29e6,
              density: 0.283,
              pr: 0.32,
            },
            {
              title: 'AISI 4130',
              condition: 'Annealed',
              yts: 55,
              uts: 75,
              eb: 30,
              sm: 29e6,
              density: 0.283,
              pr: 0.32,
            },
            {
              title: 'AISI 4140',
              condition: 'Normalized',
              yts: 60,
              uts: 90,
              eb: 20,
              sm: 29e6,
              density: 0.283,
              pr: 0.32,
            },
            {
              title: 'AISI 4140',
              condition: 'Hot Rolled',
              yts: 90,
              uts: 120,
              eb: 15,
              sm: 29.7e6,
              density: 0.283,
              pr: 0.32,
            },
            {
              title: 'AISI 4140',
              condition: 'Stress Relieved',
              yts: 100,
              uts: 120,
              eb: 10,
              sm: 29.7e6,
              density: 0.283,
              pr: 0.32,
            },
            {
              title: 'AISI 4140',
              condition: 'Annealed',
              yts: 60,
              uts: 80,
              eb: 25,
              sm: 29.7e6,
              density: 0.283,
              pr: 0.32,
            },
            {
              title: 'AISI 4140',
              condition: 'Normalized',
              yts: 90,
              uts: 120,
              eb: 20,
              sm: 29.7e6,
              density: 0.283,
              pr: 0.32,
            },
            {
              title: 'ASTM A242',
              condition: '',
              yts: 46,
              uts: 67,
              eb: 18,
              sm: 30e6,
              density: 0.282,
              pr: 0.30,
            },
            {
              title: 'ASTM A302',
              condition: 'Grade A',
              yts: 45,
              uts: 75,
              eb: 15,
              sm: 29e6,
              density: 0.282,
              pr: 0.29,
            },
            {
              title: 'ASTM A302',
              condition: 'Grade C',
              yts: 50,
              uts: 80,
              eb: 17,
              sm: 29e6,
              density: 0.282,
              pr: 0.29,
            },
            {
              title: 'ASTM A514',
              condition: 'Quenched and Tempered',
              yts: 100,
              uts: 110,
              eb: 18,
              sm: 29e6,
              density: 0.283,
              pr: 0.3,
            },
            {
              title: 'ASTM A517',
              condition: 'Grade F',
              yts: 100,
              uts: 115,
              eb: 16,
              sm: 29e6,
              density: 0.280,
              pr: 0.29,
            },
            {
              title: 'ASTM A533',
              condition: 'Class1',
              yts: 50,
              uts: 80,
              eb: 18,
              sm: 29e6,
              density: 0.282,
              pr: 0.29,
            },
            {
              title: 'ASTM A533',
              condition: 'Class2',
              yts: 70,
              uts: 90,
              eb: 16,
              sm: 29e6,
              density: 0.282,
              pr: 0.29,
            },
            {
              title: 'ASTM A533',
              condition: 'Class3',
              yts: 83,
              uts: 100,
              eb: 16,
              sm: 29e6,
              density: 0.282,
              pr: 0.29,
            },
            {
              title: 'ASTM A572',
              condition: 'Grade 50',
              yts: 50,
              uts: 65,
              eb: 18,
              sm: 30e6,
              density: 0.282,
              pr: 0.29,
            },
            {
              title: 'ASTM A588',
              condition: '',
              yts: 50,
              uts: 70,
              eb: 18,
              sm: 29.7e6,
              density: 0.280,
              pr: 0.28,
            },
            {
              title: 'ASTM A633',
              condition: 'Grade E',
              yts: 55,
              uts: 75,
              eb: 18,
              sm: 29.7e6,
              density: 0.280,
              pr: 0.28,
            },
            {
              title: 'ASTM A656',
              condition: 'Grade 50',
              yts: 50,
              uts: 60,
              eb: 20,
              sm: 29e6,
              density: 0.282,
              pr: 0.29,
            },
            {
              title: 'ASTM A656',
              condition: 'Grade 60',
              yts: 60,
              uts: 70,
              eb: 17,
              sm: 29e6,
              density: 0.282,
              pr: 0.29,
            },
            {
              title: 'ASTM A656',
              condition: 'Grade 70',
              yts: 70,
              uts: 80,
              eb: 14,
              sm: 29e6,
              density: 0.282,
              pr: 0.29,
            },
            {
              title: 'ASTM A656',
              condition: 'Grade 80',
              yts: 80,
              uts: 90,
              eb: 12,
              sm: 29e6,
              density: 0.282,
              pr: 0.29,
            },
            {
              title: 'ASTM A656',
              condition: 'Grade 100',
              yts: 100,
              uts: 110,
              eb: 12,
              sm: 29e6,
              density: 0.282,
              pr: 0.29,
            },
            {
              title: 'ASTM A710',
              condition: 'Grade A',
              yts: 80,
              uts: 85,
              eb: 20,
              sm: 29.7e6,
              density: 0.280,
              pr: 0.3,
            },
            {
              title: 'HY-80',
              condition: '',
              yts: 80,
              uts: '',
              eb: 18,
              sm: 29.7e6,
              density: 0.280,
              pr: 0.3,
            },
            {
              title: 'HY-100',
              condition: '',
              yts: 100,
              uts: '',
              eb: 16,
              sm: 29.7e6,
              density: 0.284,
              pr: 0.3,
            },
          ],
        },
      ],
      stainlessSteelData: [
        {
          title: 'Stainless Steel Materials',
          items: [
            {
              title: 'AISI 201',
              class: 'Austenitic',
              condition: 'Annealed',
              yts: 40,
              uts: 75,
              eb: 40,
              sm: 28e6,
              density: 0.289,
              pr: 0.27,
            },
            {
              title: 'AISI 202',
              class: 'Austenitic',
              condition: 'Annealed',
              yts: 40,
              uts: 75,
              eb: 40,
              sm: 28e6,
              density: 0.289,
              pr: 0.27,
            },
            {
              title: 'AISI 302',
              class: 'Austenitic',
              condition: 'Annealed',
              yts: 30,
              uts: 75,
              eb: 40,
              sm: 28e6,
              density: 0.289,
              pr: 0.27,
            },
            {
              title: 'AISI 304',
              class: 'Austenitic',
              condition: 'Annealed',
              yts: 30,
              uts: 75,
              eb: 40,
              sm: 28e6,
              density: 0.289,
              pr: 0.29,
            },
            {
              title: 'AISI 304L',
              class: 'Austenitic',
              condition: 'Annealed',
              yts: 25,
              uts: 70,
              eb: 40,
              sm: 28e6,
              density: 0.289,
              pr: 0.28,
            },
            {
              title: 'AISI 316',
              class: 'Austenitic',
              condition: 'Annealed',
              yts: 30,
              uts: 75,
              eb: 40,
              sm: 28e6,
              density: 0.289,
              pr: 0.26,
            },
            {
              title: 'AISI 316L',
              class: 'Austenitic',
              condition: 'Annealed',
              yts: 25,
              uts: 75,
              eb: 40,
              sm: 28e6,
              density: 0.289,
              pr: 0.26,
            },
            {
              title: 'AISI 405',
              class: 'Ferritic',
              condition: '',
              yts: 25,
              uts: 60,
              eb: 20,
              sm: 29e6,
              density: 0.282,
              pr: 0.28,
            },
            {
              title: 'AISI 410',
              class: 'Martensitic',
              condition: 'Annealed',
              yts: 40,
              uts: 70,
              eb: 16,
              sm: 29e6,
              density: 0.282,
              pr: 0.28,
            },
            {
              title: 'AISI 410',
              class: 'Martensitic',
              condition: 'Quenched and Tempered',
              yts: 80,
              uts: 100,
              eb: 12,
              sm: 29e6,
              density: 0.282,
              pr: 0.28,
            },
            {
              title: 'AISI 430',
              class: 'Ferritic',
              condition: '',
              yts: 30,
              uts: 60,
              eb: 20,
              sm: 29e6,
              density: 0.282,
              pr: 0.28,
            },
            {
              title: 'AISI 430',
              class: 'Ferritic',
              condition: 'Annealed',
              yts: 40,
              uts: 65,
              eb: 16,
              sm: 29e6,
              density: 0.282,
              pr: 0.28,
            },
            {
              title: '15-5PH',
              class: 'Martensitic precipitation hardenable',
              condition: 'H900',
              yts: 170,
              uts: 190,
              eb: 10,
              sm: 28.5e6,
              density: 0.283,
              pr: 0.27,
            },
            {
              title: '15-5PH',
              class: 'Martensitic precipitation hardenable',
              condition: 'H1025',
              yts: 145,
              uts: 155,
              eb: 12,
              sm: 28.5e6,
              density: 0.283,
              pr: 0.27,
            },
            {
              title: '15-5PH',
              class: 'Martensitic precipitation hardenable',
              condition: 'H11500',
              yts: 105,
              uts: 135,
              eb: 16,
              sm: 28.5e6,
              density: 0.283,
              pr: 0.27,
            },
            {
              title: '17-4PH',
              class: 'Martensitic precipitation hardenable',
              condition: 'H900',
              yts: 170,
              uts: 190,
              eb: 10,
              sm: 28.5e6,
              density: 0.282,
              pr: 0.27,
            },
            {
              title: '17-4PH',
              class: 'Martensitic precipitation hardenable',
              condition: 'H1025',
              yts: 145,
              uts: 155,
              eb: 12,
              sm: 28.5e6,
              density: 0.282,
              pr: 0.27,
            },
            {
              title: '17-4PH',
              class: 'Martensitic precipitation hardenable',
              condition: 'H1150',
              yts: 105,
              uts: 135,
              eb: 16,
              sm: 28.5e6,
              density: 0.282,
              pr: 0.27,
            },
            {
              title: '17-7PH',
              class: 'Semiaustenitic precipitation hardenable',
              condition: 'TH1050',
              yts: 150,
              uts: 177,
              eb: 6,
              sm: 29e6,
              density: 0.276,
              pr: 0.28,
            },
            {
              title: 'A-296',
              class: 'Austenitic precipitation hardenable',
              condition: '',
              yts: 95,
              uts: 140,
              eb: 15,
              sm: 29.1e6,
              density: 0.287,
              pr: 0.31,
            },
            {
              title: 'Alloy 2205',
              class: 'Duplex Austenitic hardenable',
              condition: '',
              yts: 65,
              uts: 95,
              eb: 25,
              sm: 28.5e6,
              density: 0.287,
              pr: 0.27,
            },
            {
              title: 'Ferrallium 255',
              class: 'Duplex Austenitic Ferritic',
              condition: '',
              yts: 80,
              uts: 110,
              eb: 15,
              sm: 28.5e6,
              density: 0.287,
              pr: 0.27,
            },
          ],
        },
      ],
      AluminumData: [
        {
          title: 'Aluminum Alloys',
          items: [
            {
              title: 'Al 2014',
              condition: 'T6, T651',
              yts: 59,
              uts: 67,
              eb: 7,
              sm: 10.5,
              density: 0.101,
              pr: 0.33,
            },
            {
              title: 'Al 2024',
              condition: 'T4',
              yts: 40,
              uts: 62,
              eb: 10,
              sm: 10.5,
              density: 0.1,
              pr: 0.33,
            },
            {
              title: 'Al 5052',
              condition: 'H32',
              yts: 23,
              uts: 38,
              eb: 9,
              sm: 10.1,
              density: 0.097,
              pr: 0.33,
            },
            {
              title: 'Al 5083',
              condition: 'H116, H321',
              yts: 31,
              uts: 44,
              eb: 10,
              sm: 10.3,
              density: 0.096,
              pr: 0.33,
            },
            {
              title: 'Al 5083',
              condition: 'H32',
              yts: 31,
              uts: 56,
              eb: 12,
              sm: 10.3,
              density: 0.096,
              pr: 0.33,
            },
            {
              title: 'Al 6061',
              condition: 'T4',
              yts: 16,
              uts: 26,
              eb: 16,
              sm: 9.9,
              density: 0.098,
              pr: 0.33,
            },
            {
              title: 'Al 6061',
              condition: 'T6',
              yts: 16,
              uts: 26,
              eb: 16,
              sm: 9.9,
              density: 0.098,
              pr: 0.33,
            },
            {
              title: 'Al 7075',
              condition: 'T6, T651',
              yts: 68,
              uts: 78,
              eb: 6,
              sm: 10.3,
              density: 0.101,
              pr: 0.33,
            },
          ],
        },
      ],
      CopperData: [
        {
          title: 'Copper Alloys',
          items: [
            {
              title: '70/30 Copper-Nickel',
              condition: 'Annealed',
              yts: 18,
              uts: 45,
              eb: 30,
              sm: 21.8,
              density: 0.323,
              pr: 0.3,
            },
            {
              title: '70/30 Copper-Nickel',
              condition: 'Cold Worked',
              yts: 50,
              uts: 65,
              eb: 10,
              sm: 21.8,
              density: 0.323,
              pr: 0.3,
            },
            {
              title: '90/10 Copper-Nickel',
              condition: 'Annealed',
              yts: 15,
              uts: 38,
              eb: 30,
              sm: 20.3,
              density: 0.323,
              pr: 0.3,
            },
            {
              title: '90/10 Copper-Nickel',
              condition: 'Cold Worked',
              yts: 30,
              uts: 50,
              eb: 15,
              sm: 20.3,
              density: 0.323,
              pr: 0.3,
            },
            {
              title: 'Aluminum Bronze',
              condition: '',
              yts: 32,
              uts: 85,
              eb: 12,
              sm: 15.5,
              density: 0.269,
              pr: 0.316,
            },
            {
              title: 'Beryllium Copper',
              condition: 'Solution Heat Treated',
              yts: 75,
              uts: 85,
              eb: 8,
              sm: 18.5,
              density: 0.298,
              pr: 0.27,
            },
            {
              title: 'Beryllium Copper',
              condition: 'Precipitation Head Treated',
              yts: 140,
              uts: 165,
              eb: 3,
              sm: 18.5,
              density: 0.298,
              pr: 0.27,
            },
            {
              title: 'Nikel Aluminum Bronze 632',
              condition: 'Annealed',
              yts: 34,
              uts: 90,
              eb: 10,
              sm: 16.7,
              density: 0.274,
              pr: 0.32,
            },
            {
              title: 'Nikel Aluminum Bronze 632',
              condition: 'Quench Hardened',
              yts: 50,
              uts: 90,
              eb: 15,
              sm: 16.7,
              density: 0.274,
              pr: 0.32,
            },
          ],
        },
      ],
    }),
  }
</script>
