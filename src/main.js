import Vue from 'vue'
import App from './App.vue'
import VueEllipseProgress from 'vue-ellipse-progress'

Vue.config.productionTip = false
Vue.use(VueEllipseProgress)

new Vue({
  render: h => h(App),
}).$mount('#app')
