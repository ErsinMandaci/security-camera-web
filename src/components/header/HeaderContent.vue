<template>
  <div data-aos="fade" data-aos-duration="1000" data-aos-once="true" class="container">
    <div  class="header-left-part">
      <button>
        <router-link tag="a" class="link" to="/about">HAKKIMIZDA</router-link>
      </button>
      <button>
        <router-link tag="a" class="link" to="/products">ÜRÜNLER</router-link>
        
      </button>
    </div>
    <div class="header-center-part">
      <img  @click="$router.push('/')" class="img-logo" src="src/assets/lastLogo.png" alt="" />
    </div>
    <div class="header-right-part">
      <button>
                <a class="link" href="#services">HİZMETLER</a>

      </button>
      <button>
                        <a class="link" href="#contact">İLETİŞİM</a>

     
      </button>
    </div>
  </div>
</template>

<script>
export default {

  mounted(){
    let links=document.getElementsByClassName('link');
    if(this.$route.path!= "/")
    links.forEach(element => {
      element.style=`border-bottom:2px solid  rgb(47, 33, 56);`
    });
  }
};
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap');


$flexBasis: 33.333%;




.container {
  width: 90%;
  margin: auto;
  display: flex;
  flex-flow: row wrap;
  height: 120px;
  align-items: center;
  font-family: 'Roboto', sans-serif;
}
button{
    display: inline-block;
    background: rgba(255, 255, 255, 0.604);
    padding: 10px 5%;
    border: 0;
    border-radius: 20px;
   
    font-size: 1rem;
    width: 40%;
    margin-left: 6%;
    cursor: pointer;
    font-family: 'Roboto Serif', sans-serif;

    &:hover{
    background: rgba(255, 255, 255, 0.912);
    }


    a{
         color: rgb(47, 33, 56);
         text-shadow: 1px 1px 1px rgb(232, 232, 232);
         font-weight: bolder;
         text-decoration: none;
          
          
        
    }
}


.header-left-part {
  flex-basis: $flexBasis;
  
}
.header-center-part {
  display: flex;
  justify-content: center;
  align-content: center;
  flex-basis: $flexBasis;
  max-height: 150px;
  
  .img-logo{
     height: 100%;
     transform: scale(1.2);
     cursor: pointer;
     
  }
}
.header-right-part {
  flex-basis: $flexBasis;
  text-align: right;
  
}
</style>