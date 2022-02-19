<script>
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  mounted(){
     AOS.init()
  }
}

</script>

<template>
<router-view></router-view>
</template>

<style>

* {
    scrollbar-width: thin;
}

/* Works on Chrome, Edge, and Safari */
*::-webkit-scrollbar {
    width: 12px;
}

*::-webkit-scrollbar-track {
  background: rgba(160, 158, 158, 0.734);

  
}

*::-webkit-scrollbar-thumb {

        background: rgba(17, 17, 17, 0.892);


    border-radius: 20px;
    border: none;
    
}
#app {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Rubik", sans-serif;
   overflow: clip;

}



</style>
