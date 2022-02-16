<template>

  <video-background
    src="src/assets/Cam/videoplayback.mp4"
    poster="src/assets/Cam/haikon-9360.jpg"
    :style="`max-height: ${initheight}px; height: 100vh ; width:100%; min-height:500px; `">
    
    <HeaderContent/>
    <textAnimation/>
  </video-background>

</template>

<script>
import HeaderContent from "./HeaderContent.vue"
import {ComputerScreen as textAnimation} from "/node_modules/text-animation-vue/dist/text-animation.es.js"
export default {
  data(){

    return {
      initheight:window.innerHeight
    }
  },
  components:{
    HeaderContent,
    textAnimation
  }
};
</script>

<style>
@import "/node_modules/text-animation-vue/dist/style.css";

</style>