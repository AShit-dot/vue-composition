import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'materialize-css/dist/js/materialize.min.js'
import dateFilter from '@/filters/date.filter'
import messagePlugin from '@/utils/message.plugin'

import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false
Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)

firebase.initializeApp({
  apiKey: 'AIzaSyAbAByIuwPHPTng4eGI-hFUyID3O_D_BYw',
  authDomain: 'soq-srm.firebaseapp.com',
  databaseURL: 'https://soq-srm.firebaseio.com',
  projectId: 'soq-srm',
  storageBucket: 'soq-srm.appspot.com',
  messagingSenderId: '345911204332',
  appId: '1:345911204332:web:6058feb285678de58d08c9',
  measurementId: 'G-G5GQREENH5'
})

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
