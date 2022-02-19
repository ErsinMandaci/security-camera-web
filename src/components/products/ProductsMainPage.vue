<template>

     
   
<div key="container"  data-aos="zoom-in-up"  data-aos-duration="1500" data-aos-once="true"  class="container-background">


     <h3 key="header-tran"> <span class="header-sign">~~</span>  POPULER URUNLERIMIZ <span class="header-sign">~~</span> </h3>

   
     
 
  <div  key="product-main" class="container-product-main-page">
    
 
    <div v-for="(i) in 4" :key="i" class="product-item">
      <img :src="products[0].ProductImgUrl" class="image-product" alt="That is a joke" />
      <h4>{{ products[0].name }}</h4>
     
      <p>{{ products[0].price + " " + products[0].currency }}</p>
    </div>

    
  </div>


  



<router-link tag="a" to="/products">
 
   Tümünü görüntüle
      <i class="far fa-arrow-alt-circle-right"></i> 

</router-link>
 
   
     


  </div>

  

</template>

<script>
export default {
  data() {
    return {
      
      products: [
        {
          productId: Math.floor(Math.random(1) * 100) + Date.now(),
          name: "Hikvision DS-2CD2620F-IZS 2MP Motorize Lensli IP Bullet Kamera",
          price: 100,
          currency: "TL",
          piece: 10,
          productCode:
            "Hikvision DS-2CD2620F-IZS 2MP Motorize Lensli IP Bullet Kamera",
          productExplanition: `2.0 MP Çözünürlük, 2.8-12mm Motorize Lens, 92 db DWDR, 30 Metre Gece Görüş Mesafesi, Ses ve Alarm, H.264/ MJPEG, ONVİF ,PSIA, CGI, ISAPI, 128 GB Hafıza Kartı Desteği, IP67 Koruma Sınıfı, Shutter - 1 / 100.000, -30°C / +60°C Koruma Sınıfı, 12 V DC-PoE (802.3af) Maks 7.5 W, Akıllı Analiz (Çizgi geçiş ihlali, İzinsiz giriş algılama, Dinamik analiz, Hareket algıma) BLC, ROI, Titreşim Önleme, 3D DNR, Metal Kasa, Ses, Alarm `,
          ProductImgUrl: "src/assets/productsImage/37_31102020210750.jpg",
        },
      ],
    };
  },
  mounted() {
    
  },
};
</script>

<style lang="scss" scoped>


.entry-part-background{

  position: relative;


}



.container-background{
  background: rgb(250, 250, 250);
  position: relative;
  top: -33px;
  height: 550px;
  
  
 
}
.container-product-main-page {
  display: flex;
  flex-flow: row wrap;
  margin:  20px auto;
  width: 90%;
  justify-content: space-between;
   
}
.product-item {
  border-radius: 30px;
  flex-basis: 22%;
  margin-top: 2%;
  padding: 1%;
  box-shadow: 0px 0px 10px rgb(208, 208, 208);
  background: rgb(255, 255, 255);
  height: 300px;;

.image-product{

  height: 70%;
  width: 100%;
  border-bottom:1px solid #dddcdc;
}

h4{
font-size: 0.8rem;
margin-top: 5%;
color: #1f1526;

}


p{
  font-size: 1rem;
  text-align: center;
  color: #160e1c;
  font-weight: bolder;



}
  

  // &::after{
  //   box-shadow: 0 0 10px rgba(135, 130, 130, 0.85);
  //   z-index: -1;
  //   position: absolute;
  // }
}
.product-item:hover {
  cursor: pointer;
  box-shadow: 0px 0px 17px rgba(135, 130, 130, 0.54);
}


  a {
    text-decoration: none;
    text-transform: capitalize;
    font-size: 1rem;
    color: #2d133a;
      float: right;
      margin-right: 5%;
      margin-bottom: 5%;
    &:hover {
    color: #5b187c;
    }
  }

h3 {
  text-align: center;
  text-shadow: 1px 1px 2px rgb(231, 230, 232);
  color: #302e2e;
  font-size: 1.5rem;
  padding-top: 5%;
}

.header-sign{
  font-size: 1.2rem;
}
</style>