import Vue from 'vue'
import App from './App.vue'
import WwButton from './components/Button.vue'
import WwDialog from './components/Dialog.vue'
import './assets/fonts/iconfont.css'

Vue.config.productionTip = false

Vue.component(WwButton.name,WwButton)
Vue.component(WwDialog.name,WwDialog)

new Vue({
  render: h => h(App)
}).$mount('#app')
