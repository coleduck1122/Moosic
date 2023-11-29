/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'
import VueVideoPlayer from '@videojs-player/vue'
import 'video.js/dist/video-js.css'

// Plugins
import { registerPlugins } from '@/plugins'

const app = createApp(App)
app.use(VueVideoPlayer)
registerPlugins(app)

app.mount('#app')
