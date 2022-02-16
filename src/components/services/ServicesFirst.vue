<template>
  <h3>Hizmetlerimiz</h3>
  <div class="container-services">
    <div class="img-left">
      <img
        class="img-item"
        src="src/assets/servicesImg/service-detail-5.jpg"
        alt=""
      />
    </div>
    <div class="services-one-text">
      <h4>Güvenlik Kamerası Sistemleri</h4>
      <p>
        Güvenlik kamera sistemleri bir çok alanda kullanılan, canlı ve geçmişe
        dönük kayıtları izleyebileceğiniz bir sistemdir. Analog ve IP Network
        teknolojisi ile iki farklı teknolojide üretilen güvenlik kameraları gece
        ve gündüz görüntü alma kabiliyetine sahiptir. Niteliğine göre lazer
        kameralar ile gece kilometrelerce görüntü alabilirken termal kameralar
        ile sadece ısı yayan cisimlerin görüntülerini de alabilirsiniz. Günümüze
        kadar güvenlik kameraları ile gündüz renkli gece ise siyah beyaz görüntü
        elde edebiliyorduk fakat gelişen teknoloji ile gece görüntülerinide
        renkli izleyebilmek mümkün hale geldi. StarLight, DarkFighter, ColorVu
        ve Full Color teknolojisi kullanan her kamera ile gece renkli görüntü
        elde edilebilir.
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');
.container-services {
  width: 80%;
  display: flex;
  margin: auto;
  flex-flow: row nowrap;
  margin-top: 7%;
  margin-bottom: 7%;
}
.img-left {
  flex-basis: 55%;
  border: 0;

  .img-item {
    border-radius: 10px;
    filter: drop-shadow(1px 2px 10px rgb(75, 74, 74));
    width: fit-content;
    height: 530px;
    max-width: 90%;
  }
}

.services-one-text {
  flex-basis: 45%;
  padding-bottom:5%;

  p {
    font-family: 'Roboto', sans-serif;
    color: #585965;
    text-align: justify;
    font-size: 1.2rem;
    line-height: 1.8;
    width: 90%;
    padding-left: 10%;

  }
}
h3 {
  text-align: center;
  color: #302e2e;
  font-size: 2rem;
  line-height: 1;
  margin-top: 5%;
}
h4{
    display: flex;
    justify-content: center;
}
</style>