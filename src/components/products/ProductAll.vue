

<template>
  
  <div class="container-all-product">

      <div v-for="i in 8" :key="i" class="product-item">
      <img :src="products[0].ProductImgUrl" class="image-product" alt="That is a joke" />
      <h4>{{ products[0].name }}</h4>
     
      <p>{{ products[0].price + " " + products[0].currency }}</p>
    </div>

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

}
</script>

<style scoped lang="scss">

.container-all-product{
    display: flex;
    width: 90%;
    margin: auto;
    flex-flow: row wrap;


}


.product-item {
    margin-left: 1%;
  border-radius: 30px;
  flex-basis: 30%;
  margin-top: 2%;
  margin-bottom: 1%;
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

</style>