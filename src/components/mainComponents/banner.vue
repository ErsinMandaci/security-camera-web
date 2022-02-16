<template>
  <div id="container-banner">
    <img :src="`src/assets/${images[index]}`" alt="" />
    
  </div>
    
</template>

<script>
export default {
    data() {
        return {
            images:["unv-3942.jpg","haikon-9360.jpg","samsung-661.jpg"],
            index:0
        }
    },
    created(){
        setInterval(() => {
            if (this.index < this.images.length-1) {
                this.index++;
            }
           else {
               this.index = 0;
           }
        },3000)
     
    }

}
</script>

<style scoped>
    img{
        background-size: cover;
        width: 100%;
        overflow: hidden;
        height: 500px;
    }
</style>