import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueEllipseProgress from 'vue-ellipse-progress'
import VModal from 'vue-js-modal'

Vue.config.productionTip = false
Vue.use(VueEllipseProgress)
Vue.use(VModal, { dialog: true })

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
