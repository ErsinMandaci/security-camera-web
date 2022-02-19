<template>

  <div id="reference"  data-aos="zoom-in" data-aos-duration="1500">
    <h3><span class="header-sign">~~</span> Referanslarımız <span class="header-sign">~~</span></h3>
    <div class="referance-logo-container">

    
    <Referance v-for="(item, index) in referance" :key="index" :rImg="item"/>

    </div>
  </div>
</template>

<script>
import Referance from "./referance.vue";
export default {
  data() {
    return {
      referance: [
        "borusan.png",
        "yucelBoru.png",
        "cayirovaBoru.png",
        "kardemir.png",
         "borusan.png",
        "yucelBoru.png",
        "cayirovaBoru.png",
        "kardemir.png",
        
         "borusan.png",
        "yucelBoru.png",
        "cayirovaBoru.png",
        "kardemir.png",
      
      ],
    };
  },
  components: { Referance },
};
</script>

<style scoped>
#reference {

width: 100%;

}

.referance-logo-container{

    display: flex;
  flex-flow: row wrap;
  width: 80%;
  margin: auto;
  justify-content: space-between;


}
h3{
 text-align: center;
 font-size: 2rem;
 text-shadow: 1px 1px 2px white;
 margin-bottom: 5%;
}

.header-sign{
  font-size: 1.2rem;
}
</style>