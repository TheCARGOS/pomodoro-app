import Vue from 'vue'
import App from './App.vue'
import VueEllipseProgress from 'vue-ellipse-progress'
import store from './store'

Vue.config.productionTip = false
Vue.use(VueEllipseProgress)

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
