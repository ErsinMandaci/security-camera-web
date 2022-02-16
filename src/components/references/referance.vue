<template>
  <div id="referance" class="row">
    <img :src="`src/assets/referenceImg/${rImg}`" alt="" />
  </div>
</template>
<script>
export default {
  props:[
    "rImg"
  ],
};
</script>

<style scoped>
.row {
  display: flex;
  flex-basis: 22%;
  margin: auto;
  height: auto;
  border-radius: 10px;
  

 
}
img {
  width: 100%;
  background-size: cover;
}
</style>