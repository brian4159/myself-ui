import Vue from 'vue'
import App from './App.vue'
import WwButton from './components/Button.vue'

Vue.config.productionTip = false
Vue.component(WwButton.name,WwButton)

new Vue({
  render: h => h(App)
}).$mount('#app')
