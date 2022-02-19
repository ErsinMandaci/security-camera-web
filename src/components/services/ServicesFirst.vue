<template>
     

<div  data-aos="flip-down" data-aos-duration="1000" class=" container-services-first" >

 <h3 id="services" ><span class="header-sign">~~</span> Hizmetlerimiz <span class="header-sign">~~</span></h3>    

  <div class="container-services-items">
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

  </div>
<!-- <transition name="faded" tag="div"   mode="out-in" >   
  </transition> -->
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital@1&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@500&display=swap');

.container-services-first{

height: 500px; margin:4% auto;
background: rgb(255, 255, 255);

}
.container-services-items {
  width: 90%;
  display: flex;
  margin: auto;
  flex-flow: row nowrap;
 

}
.img-left {
  flex-basis: 50%;
  border: 0;
        transform: scale(0.9);


  .img-item {
    border-radius: 30px;
    
    filter: drop-shadow(1px 2px 10px rgb(75, 74, 74));
    width: fit-content;
     height: 90%;
   
    max-width: 90%;
  }
}

.services-one-text {
  flex-basis: 45%;
  padding-bottom:5%;

  p {

font-family: 'Tajawal', sans-serif;
 font-weight: 500;


      text-shadow:1px 1px 2px  #ffffff;

    color: #18121d;
    text-align: justify;
    font-size: 1rem;
    line-height: 1.5;
    padding-left: 10%;

  }
}
h3 {
  
  color: #1c1827;
  text-align: center;
  text-shadow:1px 1px 2px  #ffffff;
  font-size: 2rem;
  // line-height: 1;
  margin-top: 5%;
  margin-bottom: 5%;
}
h4{
    display: flex;
    justify-content: center;
     color: #070410;
  text-shadow:1px 1px 2px  #ffffff;
  text-decoration-line: underline;
}

.header-sign{
  font-size: 1.2rem;
}
</style>