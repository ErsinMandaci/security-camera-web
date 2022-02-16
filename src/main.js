import { createApp } from 'vue'
import App from './App.vue'
import VideoBackground from 'vue-responsive-video-background-player'

let vue = createApp(App).component('video-background', VideoBackground).mount('#app');
