<template>
  <v-card>
    <v-card-title>Feeds and speeds</v-card-title>
    <v-card-subtitle>Click on a panel below to see various feeds and speeds for different materials</v-card-subtitle>
    <v-expansion-panels inset>
      <v-row class="px-6">
        <v-col cols="6">
          <h3 class="my-4">
            Steel
          </h3>
          <v-expansion-panel
            v-for="(item,i) in steelData"
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
        </v-col>

        <v-col cols="6">
          <h3 class="my-4">
            Stainless Steel
          </h3>
          <v-expansion-panel
            v-for="(item,i) in stainlessData"
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
        </v-col>
        <v-col cols="6">
          <h3 class="my-4">
            Aluminum
          </h3>
          <v-expansion-panel
            v-for="(item,i) in aluminumData"
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
        </v-col>
        <v-col cols="6">
          <h3 class="my-4">
            Copper
          </h3>
          <v-expansion-panel
            v-for="(item,i) in copperData"
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
        </v-col>
      </v-row>
    </v-expansion-panels>
  </v-card>
</template>

<script>
  export default {
    name: 'FeedsAndSpeeds',

    data: () => ({
      headers: [
        {
          text: 'Common Materials',
          align: 'start',
          value: 'title',
        },
        { text: 'Material Thickness Inch (in)', value: 'in' },
        { text: 'Material Thickness Milimeters (m)', value: 'mm' },
        { text: 'CO2 4.0 kW (in/min)', value: 'co2' },
        { text: 'Disk 4.0 kW (in/min)', value: 'disk' },
        { text: 'Fiber 4.0 kW (in/min)', value: 'fiber' },
      ],
      steelData: [
        {
          title: 'STEEL (USING O2)',
          items: [
            {
              title: 'Steel 02',
              in: 0.040,
              mm: 1.0,
              co2: 280,
              disk: 340,
              fiber: 319,
            },
            {
              title: 'Steel 02',
              in: 0.060,
              mm: 1.5,
              co2: 210,
              disk: 252,
              fiber: 260,
            },
            {
              title: 'Steel 02',
              in: 0.080,
              mm: 2.0,
              co2: 170,
              disk: 200,
              fiber: 224,
            },
            {
              title: 'Steel 02',
              in: 0.100,
              mm: 2.5,
              co2: 130,
              disk: 173,
              fiber: 173,
            },
            {
              title: 'Steel 02',
              in: 0.120,
              mm: 3.0,
              co2: 120,
              disk: 150,
              fiber: 151,
            },
            {
              title: 'Steel 02',
              in: 0.180,
              mm: 4.5,
              co2: 110,
              disk: 130,
              fiber: 132,
            },
            {
              title: 'Steel 02',
              in: 0.250,
              mm: 6.4,
              co2: 100,
              disk: 110,
              fiber: 110,
            },
            {
              title: 'Steel 02',
              in: 0.375,
              mm: 9.5,
              co2: 70,
              disk: 75,
              fiber: 85,
            },
            {
              title: 'Steel 02',
              in: 0.500,
              mm: 12.7,
              co2: 56,
              disk: 52,
              fiber: 60,
            },
            {
              title: 'Steel 02',
              in: 0.625,
              mm: 16.0,
              co2: 38,
              disk: 41,
              fiber: 45,
            },
            {
              title: 'Steel 02',
              in: 0.750,
              mm: 20,
              co2: 32,
              disk: 30,
              fiber: 33,
            },
          ],
        },
        {
          title: 'STEEL (USING N2)',
          items: [
            {
              title: 'Steel N2',
              in: 0.040,
              mm: 1.0,
              co2: 360,
              disk: 1682,
              fiber: 2362,
            },
            {
              title: 'Steel N2',
              in: 0.060,
              mm: 1.5,
              co2: 260,
              disk: 1186,
              fiber: 1417,
            },
            {
              title: 'Steel N2',
              in: 0.080,
              mm: 2.0,
              co2: 200,
              disk: 910,
              fiber: 760,
            },
            {
              title: 'Steel N2',
              in: 0.100,
              mm: 2.5,
              co2: 170,
              disk: 500,
              fiber: 550,
            },
            {
              title: 'Steel N2',
              in: 0.120,
              mm: 3.0,
              co2: 140,
              disk: 374,
              fiber: 380,
            },
            {
              title: 'Steel N2',
              in: 0.180,
              mm: 4.5,
              co2: 80,
              disk: 200,
              fiber: 213,
            },
            {
              title: 'Steel N2',
              in: 0.250,
              mm: 6.4,
              co2: 50,
              disk: 89,
              fiber: 95,
            },
          ],
        },
        {
          title: 'STEEL (USING AIR)',
          items: [
            {
              title: 'Steel AIR',
              in: 0.040,
              mm: 1.0,
              co2: 720,
              fiber: 2126,
            },
            {
              title: 'Steel AIR',
              in: 0.060,
              mm: 1.5,
              co2: 470,
              fiber: 1417,
            },
            {
              title: 'Steel AIR',
              in: 0.080,
              mm: 2.0,
              co2: 350,
              fiber: 756,
            },
            {
              title: 'Steel AIR',
              in: 0.100,
              mm: 2.5,
              fiber: 472,
            },
          ],
        },
      ],
      stainlessData: [
        {
          title: 'STAINLESS STEEL (USING N2)',
          items: [
            {
              title: 'Stainless Steel N2',
              in: 0.040,
              mm: 1.0,
              co2: 400,
              disk: 1682,
              fiber: 2362,
            },
            {
              title: 'Stainless Steel N2',
              in: 0.060,
              mm: 1.5,
              co2: 290,
              disk: 1160,
              fiber: 1654,
            },
            {
              title: 'Stainless Steel N2',
              in: 0.080,
              mm: 2.0,
              co2: 230,
              disk: 886,
              fiber: 886,
            },
            {
              title: 'Stainless Steel N2',
              in: 0.100,
              mm: 2.5,
              co2: 195,
              disk: 610,
              fiber: 610,
            },
            {
              title: 'Stainless Steel N2',
              in: 0.120,
              mm: 3.0,
              co2: 160,
              disk: 334,
              fiber: 354,
            },
            {
              title: 'Stainless Steel N2',
              in: 0.180,
              mm: 4.5,
              co2: 100,
              disk: 177,
              fiber: 197,
            },
            {
              title: 'Stainless Steel N2',
              in: 0.250,
              mm: 6.4,
              co2: 80,
              disk: 120,
              fiber: 138,
            },
            {
              title: 'Stainless Steel N2',
              in: 0.375,
              mm: 9.5,
              co2: 28,
              disk: 25,
              fiber: 59,
            },
            {
              title: 'Stainless Steel N2',
              in: 0.500,
              mm: 12.7,
              co2: 16,
              disk: 16,
              fiber: 39,
            },
            {
              title: 'Stainless Steel N2',
              in: 0.625,
              mm: 16.0,
              co2: 14,
              disk: 12,
              fiber: 18,
            },
          ],
        },
      ],
      aluminumData: [
        {
          title: 'Aluminum (USING N2)',
          items: [
            {
              title: 'Aluminum N2',
              in: 0.040,
              mm: 1.0,
              co2: 420,
              disk: 845,
              fiber: 2126,
            },
            {
              title: 'Aluminum N2',
              in: 0.060,
              mm: 1.5,
              co2: 320,
              disk: 501,
              fiber: 1417,
            },
            {
              title: 'Aluminum N2',
              in: 0.080,
              mm: 2.0,
              co2: 260,
              disk: 354,
              fiber: 756,
            },
            {
              title: 'Aluminum N2',
              in: 0.100,
              mm: 2.5,
              co2: 215,
              disk: 265,
              fiber: 425,
            },
            {
              title: 'Aluminum N2',
              in: 0.120,
              mm: 3.0,
              co2: 170,
              disk: 177,
              fiber: 402,
            },
            {
              title: 'Aluminum N2',
              in: 0.180,
              mm: 4.5,
              co2: 60,
              disk: 132,
              fiber: 170,
            },
            {
              title: 'Aluminum N2',
              in: 0.250,
              mm: 6.4,
              co2: 40,
              disk: 92,
              fiber: 100,
            },
            {
              title: 'Aluminum N2',
              in: 0.375,
              mm: 9.5,
              co2: 10,
              disk: 40,
              fiber: 45,
            },
            {
              title: 'Aluminum N2',
              in: 0.500,
              mm: 12.7,
              disk: 20,
              fiber: 21,
            },
          ],
        },
        {
          title: 'Aluminum (USING AIR)',
          items: [
            {
              title: 'Aluminum Air',
              in: 0.040,
              mm: 1.0,
              co2: 460,
              disk: 2165,
              fiber: 2165,
            },
            {
              title: 'Aluminum Air',
              in: 0.060,
              mm: 1.5,
              co2: 300,
              disk: 1219,
              fiber: 1417,
            },
            {
              title: 'Aluminum Air',
              in: 0.080,
              mm: 2.0,
              co2: 210,
              disk: 680,
              fiber: 756,
            },
          ],
        },
      ],
      copperData: [
        {
          title: 'Copper (USING O2)',
          items: [
            {
              title: 'Copper 02',
              in: 0.040,
              mm: 1.0,
              disk: 765,
              fiber: 1701,
            },
            {
              title: 'Copper 02',
              in: 0.060,
              mm: 1.5,
              disk: 472,
              fiber: 898,
            },
            {
              title: 'Copper 02',
              in: 0.080,
              mm: 2.0,
              disk: 315,
              fiber: 591,
            },
            {
              title: 'Copper 02',
              in: 0.100,
              mm: 2.5,
              disk: 215,
              fiber: 378,
            },
            {
              title: 'Copper 02',
              in: 0.120,
              mm: 3.0,
              disk: 115,
              fiber: 236,
            },
            {
              title: 'Copper 02',
              in: 0.180,
              mm: 4.5,
              disk: 47,
              fiber: 113,
            },
            {
              title: 'Copper 02',
              in: 0.200,
              mm: 5.0,
              disk: 35,
              fiber: 80,
            },
          ],
        },
      ],
    }),
  }
</script>
