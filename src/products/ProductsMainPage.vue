<template>
  <h3>Öne çıkan ürünler</h3>
  <div class="container-product-main-page">
    <div v-for="i in 4" :key="i" class="product-item">
      <img :src="products[0].ProductImgUrl" alt="That is a joke" />
      <h4>{{ products[0].name }}</h4>
      <h5>{{ products[0].productCode }}</h5>
      <p>{{ products[0].price + " " + products[0].currency }}</p>
    </div>
  </div>
  <div class="view-all">
    <a href="">
      Tümünü görüntüle
      <i class="far fa-arrow-alt-circle-right"></i>
    </a>
  </div>
</template>

<script>
import { mergeProps } from "@vue/runtime-core";
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
    console.log(this.products[0]);
    console.log(Date.now());
    console.log(Math.random(1) * 100);
  },
};
</script>

<style lang="scss" scoped>
.container-product-main-page {
  display: flex;
  flex-flow: row wrap;
  margin: auto;
  width: 80%;
  justify-content: space-between;
}
.product-item {
  position: relative;
  border-radius: 10px;
  flex-basis: 20%;
  margin-top: 2%;
  padding: 1%;
  box-shadow: 0px 0px 4px rgba(135, 130, 130, 0.54);

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
.view-all {
  margin-left: 80%;
  margin-top: 1%;
  cursor: pointer;

  a {
    text-decoration: none;
    text-transform: capitalize;
    font-size: 1rem;
    color: #505050;

    &:hover {
      color: #131212;
    }
  }
}
h3 {
  text-align: center;
  color: #302e2e;
  font-size: 2rem;
  line-height: 1;
}
</style>