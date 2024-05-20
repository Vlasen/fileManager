import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'
import Paginate from "vuejs-paginate-next"
// import router from './router'

const app = createApp(App)

app
  .component('Paginate', Paginate)

app
  .use(bootstrap)
  // .use(router)
  .mount('#app')