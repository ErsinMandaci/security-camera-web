<template>
 
 
    <img class="img-item" :src="`src/assets/referenceImg/${rImg}`" alt="" />

   

</template>
<script>
export default {
  props:[
    "rImg"
  ],
};
</script>

<style scoped>
.img-item {
  width: 20%;
  margin-right:5% ;
  margin-bottom: 10%;
  display: inline-block;
 
  border-radius: 10px;
 height: 75px;

     filter: drop-shadow(1px 2px 5px rgb(46, 27, 44));

  

 
}

</style>