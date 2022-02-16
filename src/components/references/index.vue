<template>
<h3>Referanslarımız</h3>
  <div id="reference">
    <Referance v-for="(item, index) in referance" :key="index" :rImg="item" />
  </div>
</template>

<script>
import Referance from "./referance.vue";
export default {
  data() {
    return {
      referance: [
        "1601807720_borusan_canva.png",
        "1601807844_yucel boru canva.png",
        "1601808062_cayirova canva.png",
        "1601808329_kardemir canva.png",
        "1601808329_kardemir canva.png",
        "1601808329_kardemir canva.png",
        "1601808329_kardemir canva.png",
        "1601808329_kardemir canva.png",
      ],
    };
  },
  components: { Referance },
};
</script>

<style scoped>
#reference {
  display: flex;
  flex-flow: row wrap;
  width: 60%;
  margin: auto;
  justify-content: space-between;
}
h3{
  display: flex;
  justify-content: center;
}
</style>