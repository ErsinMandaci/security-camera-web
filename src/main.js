import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"
import VideoBackground from 'vue-responsive-video-background-player'

let appVue = createApp(App); 
appVue.use(router);


appVue.component('video-background', VideoBackground);



appVue.mount('#app');
