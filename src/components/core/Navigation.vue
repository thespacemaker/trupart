<template>
  <v-navigation-drawer
    v-model="drawer"
    app
    temporary
    right
  >
    <v-list-item>
      <v-list-item-avatar>
        <v-img src="@/assets/logo-dark.png" />
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title>TruPart Manufacturing, Inc.</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-divider />

    <v-list dense>
      <v-list-item
        v-for="item in items"
        :key="item.title"
        link
        :to="item.to"
      >
        <!-- <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon> -->

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  export default {
    name: 'Navigation',

    props: {
      toggle: {
        type: Boolean,
        required: true,
      },
    },

    data: () => ({
      items: [
        { title: 'Home', icon: 'home', to: '/' },
        { title: 'About', icon: 'info', to: '/about' },
        { title: 'Services', icon: 'work', to: '/services' },
        { title: 'Tools', icon: 'work', to: '/tools' },
      ],
    }),

    computed: {
      drawer: function () {
        // `this` points to the vm instance
        return this.toggle
      },
    },
  }
</script>
