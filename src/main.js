import Vue from 'vue'
import App from './App.vue'
import WwButton from './components/Button'
import WwDialog from './components/Dialog'
import WwInput from './components/Input'
import './assets/fonts/iconfont.css'


Vue.config.productionTip = false

Vue.component(WwButton.name,WwButton)
Vue.component(WwDialog.name,WwDialog)
Vue.component(WwInput.name,WwInput)

new Vue({
  render: h => h(App)
}).$mount('#app')
