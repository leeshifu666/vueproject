import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import HeadBar from './components/HeadBar'
import FooterBar from './components/FooterBar'

Vue.config.productionTip = false

//全局注册 HeadBar 组件
Vue.component("headBar", HeadBar)

//全局注册 FooterBar 组件
Vue.component("footerBar", FooterBar)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
