<template>
<div data-aos="flip-down" data-aos-duration="1000" class="container-services-second" >


  <div class="container-services-items">
 
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

       <div class="img-right">
      <img
        class="img-item"
        src="src/assets/servicesImg/service2.jpg"
        alt=""
      />
    </div>
  </div>

  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@500&display=swap');

.container-services-second{

height: 500px; margin:5% auto;
background: rgb(250, 250, 250);

}
.container-services-items {
  width: 90%;
  
  display: flex;
  margin: auto;
  flex-flow: row nowrap;
  padding-top: 5%;
  justify-content: space-between;
 

}
.img-right {
  flex-basis: 45%;
  border: 0;

  .img-item {
    border-radius: 30px;
      transform: scale(0.9);

    
    filter: drop-shadow(1px 2px 10px rgb(75, 74, 74));
    width: fit-content;
     height: 90%;
   
    max-width: 100%;
  }
}

.services-one-text {
  flex-basis: 45%;
  padding-bottom:5%;

  p {
   font-family: 'Tajawal', sans-serif;
      text-shadow:1px 1px 2px  #ffffff;
font-weight: 500;

    color: #2a173a;
    text-align: justify;
    font-size: 1rem;
    line-height: 1.5;
    padding-left: 10%;

  }
}

h4{
    display: flex;
    justify-content: center;
     color: #070410;
  text-shadow:1px 1px 2px  #ffffff;
  text-decoration-line: underline;
}
</style>