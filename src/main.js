import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/components/base'
import vuetify from './plugins/vuetify'
import VueMeta from 'vue-meta'

Vue.use(VueMeta)

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App),
}).$mount('#app')
