<template>
<div class="entry-part-background" >   


  <video-background
    src="src/assets/Cam/videoplayback.mp4"
    poster="src/assets/Cam/haikon-9360.jpg"
    :style="`min-height:${initheight+20}px;  width:100%; `">
    
    <HeaderContent/>
        
 
    <div data-aos="fade" data-aos-duration="2500" class="computer-screen">
  
         <ComputerScreen  />
       
     
     

    </div>

       
   
  </video-background>
  </div>

</template>

<script>
import HeaderContent from "./HeaderContent.vue"
import ComputerScreen from "./ComputerScreen.vue"
export default {
  data(){

    return {
      initheight:window.innerHeight
    }
  },
  components:{
    HeaderContent,
   ComputerScreen
  }
};
</script>

<style  lang="scss">

.entry-part-background{

  position: relative;


}



.computer-screen{

  // height: auto;
  // width: 30%;
  position:relative;

  left: 64%;
  top: 15%;
 height: 370px;
 max-width: 400px;

  
  background-image:url('/src/assets/cam/computer-monitor.png');
  z-index: 1;
  background-size: contain;
  background-repeat: no-repeat;
}

</style>