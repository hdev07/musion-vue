import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import VueFeather from 'vue-feather'
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const app = createApp(App)

const myCustomLightTheme = {
  dark: true,
  colors: {
    primary: '#FF4081',
    secondary: '#1A1A1A',
    tertary: '#AEAEAE',
    acent: '#212120'
  }
}

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'myCustomLightTheme',
    themes: {
      myCustomLightTheme
    }
  }
})

app.use(createPinia())
app.use(router)
app.component(VueFeather.name, VueFeather)
app.use(vuetify)
app.mount('#app')
