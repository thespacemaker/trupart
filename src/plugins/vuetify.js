import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader
import Vue from 'vue'
import Vuetify, { VAvatar, VIcon } from 'vuetify/lib'

Vue.use(Vuetify, {
  components: {
    VAvatar,
    VIcon,
  },
})

export default new Vuetify({
  icons: {
    iconfont: 'md',
  },
  theme: {
    themes: {
      light: {
        primary: '#3f51b5',
        secondary: '#9fa8da',
        accent: '#4FEEBA',
      },
    },
  },
})
