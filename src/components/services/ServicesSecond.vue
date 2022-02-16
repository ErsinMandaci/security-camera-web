<template>
  <div class="container-services">
    <div class="services-two-text">
      <h4>Güvenlik Kamerası Sistemleri</h4>
      <p>
        Temelinde duman algılama, ısı artışı algılama, gaz kaçağı ve benzeri
        yangın algılama ürünlerinden oluşan entegre bir sistemdir. Yangını
        olayın gerçekleştiği an algılayıp, yangın anında uygulanacak senaryoyu
        uygular. Yangın alarm sistemi sadece yangını algılamaz yangın anında
        söndürme sistemini devreye alabilir veya asansörünüzü kontrol edebilir.
        Yangın alarmı çözümlerinde 2 farklı teknolojik alt yapıya sahip çözümler
        bulunmakta olup, Konvansiyonel sistemleri daha ekonomik fakat bölgesel
        tespitler yaparken adresli sistemlerde noktasal tespitler ve entegrasyon
        imkanı sağlamaktadır.
      </p>
    </div>
    <div class="img-right">
      <img
        class="img-item"
        src="src/assets/ServicesImg/kamera-ve-alarm-1110x550.jpg"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');

.container-services {
  width: 80;
  display: flex;
  margin: auto;
  flex-flow: nowrap;
  margin-top: 7%;
  margin-bottom: 7%;
}
.img-right {
  flex-basis: 55%;
  border: 0;
}
.img-item {
  border-radius: 10px;
  filter: drop-shadow(1px 2px 10px rgb(75, 74, 74));
  width: fit-content;
  height: 530px;
  max-width: 75%;
  margin-left: 10%;
}
.services-two-text {
  flex-basis: 45%;
  padding-bottom: 5%;

  p {
    font-family: "Roboto", sans-serif;
    color: #585965;
    text-align: justify;
    font-size: 1.2rem;
    line-height: 1.8;
    width: 90%;
    padding-left: 10%;
  }
}
h4 {
  display: flex;
  justify-content: center;
}
</style>