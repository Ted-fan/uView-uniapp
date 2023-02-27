import Vue from 'vue'
import App from './App'
import uView from "uview-ui";
import store from './store'
import plugins from './plugins' // plugins
Vue.use(uView);
Vue.use(plugins)
const { mockXHR } = require('../src/mock')
mockXHR()

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  store,
  plugins,
  ...App
})
app.$mount()
