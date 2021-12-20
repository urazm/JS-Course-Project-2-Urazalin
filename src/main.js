// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vuetify from './plugins/vuetify'
import store from './store'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import BuyDialogComponent from '@/components/Common/BuyDialog'

Vue.config.productionTip = false
Vue.component('app-buy-dialog', BuyDialogComponent)
/* eslint-disable no-new */
new Vue({
  vuetify,
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>',
  created () {
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      apiKey: 'AIzaSyCya_fgLOl6v74CUSpzJa47LuYRAe_Z450',
      authDomain: 'onlinestore-a8919.firebaseapp.com',
      projectId: 'onlinestore-a8919',
      storageBucket: 'onlinestore-a8919.appspot.com',
      messagingSenderId: '632166779948',
      appId: '1:632166779948:web:4b8f7246b6079e6ef3d589',
      measurementId: 'G-T7TCZTP1G7'
    }
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig)
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    })
    this.$store.dispatch('fetchProducts')
  }
})
