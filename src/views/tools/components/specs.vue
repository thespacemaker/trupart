<template>
  <v-card>
    <h2 class="mx-4 mt-5">
      Metal Specifications
    </h2>
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
              yts: 32,
              uts: 50,
              eb: 25,
              sm: 29e6,
              density: 0.283,
              pr: 0.32,
            },
            {
              title: 'ASTM A516',
              condition: 'Grade 70',
              yts: 32,
              uts: 50,
              eb: 25,
              sm: 29e6,
              density: 0.283,
              pr: 0.32,
            },
          ],
        },
      ],
      stainlessSteelData: [
        {
          title: 'Stainless Steel',
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
              yts: 32,
              uts: 50,
              eb: 25,
              sm: 29e6,
              density: 0.283,
              pr: 0.32,
            },
            {
              title: 'ASTM A516',
              condition: 'Grade 70',
              yts: 32,
              uts: 50,
              eb: 25,
              sm: 29e6,
              density: 0.283,
              pr: 0.32,
            },
          ],
        },
      ],
      AluminumData: [
        {
          title: 'Aluminum',
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
              yts: 32,
              uts: 50,
              eb: 25,
              sm: 29e6,
              density: 0.283,
              pr: 0.32,
            },
            {
              title: 'ASTM A516',
              condition: 'Grade 70',
              yts: 32,
              uts: 50,
              eb: 25,
              sm: 29e6,
              density: 0.283,
              pr: 0.32,
            },
          ],
        },
      ],
    }),
  }
</script>
