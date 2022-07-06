import Vue from 'vue'
import App from './App.vue'
import WwButton from './components/Button'
import WwDialog from './components/Dialog'
import WwInput from './components/Input'
import WwSwitch from './components/Switch'
import WwRadio from './components/Radio'
import './assets/fonts/iconfont.css'


Vue.config.productionTip = false
Vue.config.devtools = true


Vue.component(WwButton.name,WwButton)
Vue.component(WwDialog.name,WwDialog)
Vue.component(WwInput.name,WwInput)
Vue.component(WwSwitch.name,WwSwitch)
Vue.component(WwRadio.name,WwRadio)

new Vue({
  render: h => h(App)
}).$mount('#app')
