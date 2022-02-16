<template>
  <div id="container-products">
    <div class="product" v-for="item in products" :key="item.productId">
      <img :src="`src/assets/productsImage/${item.productImg}`" alt="" />
      <p>
        {{ item.productDetails }}
      </p>

      <span>
        <b>{{ item.productPrice }} </b>
      </span>

      <!-- <button>incele</button> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          productId: 0,
          productName: "Camera-0",
          productDetails: "Hikvison DS-2CD2043G0-ICKV 4MP IP IR Bullet Kamera",
          productPrice: "10 ₺",
          productPiece: 20,
          productImg: "37_31102020210750.jpg",
        },
        {
          productId: 1,
          productName: "Camera-1",
          productDetails: "Hikvison DS-2CD2043G0-ICKV 4MP IP IR Bullet Kamera",
          productPrice: "10 ₺",
          productPiece: 30,
          productImg: "38_31102020221507.jpg",
        },
        {
          productId: 2,
          productName: "Camera-2",
          productDetails:
            "Hikvision DS-2TP31B-3AUF El Tipi Termografi Termal Kamera",
          productPrice: "10 ₺",
          productPiece: 20,
          productImg: "42_31102020235713.jpg",
        },
        {
          productId: 3,
          productName: "Camera-3",
          productDetails: "Hikvison DS-2CD2043G0-ICKV 4MP IP IR Bullet Kamera",
          productPrice: "500000 ₺",
          productPiece: 20,
          productImg: "44_04112020230102.jpg",
        },
        {
          productId: 4,
          productName: "Camera-3",
          productDetails: "Hikvison DS-2CD2043G0-ICKV 4MP IP IR Bullet Kamera",
          productPrice: "2000 ₺",
          productPiece: 20,
          productImg: "44_04112020230102.jpg",
        },
        {
          productId: 5,
          productName: "Camera-3",
          productDetails: "Hikvison DS-2CD2043G0-ICKV 4MP IP IR Bullet Kamera",
          productPrice: "10 ₺",
          productPiece: 20,
          productImg: "44_04112020230102.jpg",
        },
          {
          productId: 6,
          productName: "Camera-3",
          productDetails: "Hikvison DS-2CD2043G0-ICKV 4MP IP IR Bullet Kamera",
          productPrice: "10 ₺",
          productPiece: 20,
          productImg: "44_04112020230102.jpg",
        },
        {
          productId: 7,
          productName: "Camera-3",
          productDetails: "Hikvison DS-2CD2043G0-ICKV 4MP IP IR Bullet Kamera",
          productPrice: "10 ₺",
          productPiece: 20,
          productImg: "44_04112020230102.jpg",
        },
      ],
    };
  },
};

</script>

<style scoped>
#container-products {
  display: flex;
  flex-flow: row wrap;
  width: 80%;
  margin:auto;
  justify-content: space-between;

}
.product {
  flex-basis: 22%;
  border: 1px solid #ebebeb;
  border-radius: 5px;
  box-shadow: 1px rgba(100, 97, 97, 0.575);
  height: 380px;
  margin-top:5%;
  margin-bottom: 5%;
}
.product:hover{
  cursor: pointer;
  background: #e5e8e9;
  outline: 1px solid rgb(39, 34, 34);
}
img {
  
  width: 100%;
  background-size: cover;
}
p {
  text-align: center;
  color: rgb(20, 20, 48);

}
button {
  cursor: pointer;
  border: none;
  border-radius: 5px;
  color: white;
  background-color: #232f3e;
  outline: 1px solid #232f3e;
  padding: 5px 10px;
  float: right;
  display: none;
}
button:hover {
  background-color: #364f6d;
}
span {
 padding-left: 2%;
}
</style>