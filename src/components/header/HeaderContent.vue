<template>
  <div class="container">
    <div class="header-left-part">
      <button>
        <a href=""> HAKKIMIZDA </a>
      </button>
      <button>
        <a href=""> ÜRÜNLER </a>
      </button>
    </div>
    <div class="header-center-part">
      <img class="img-logo" src="src/assets/lastLogo.png" alt="" />
    </div>
    <div class="header-right-part">
      <button>
        <a href=""> HİZMETLER </a>
      </button>
      <button>
        <a href=""> İLETİŞİM </a>
      </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap');


$flexBasis: 33.333%;

.container {
  width: 90%;
  margin: auto;
  display: flex;
  flex-flow: row wrap;
  height: 140px;
  align-items: center;
  font-family: 'Roboto', sans-serif;
}
button{
    display: inline-block;
    background: rgba(0, 0, 0, 0.74);
    padding: 10px 5%;
    border: 0;
    border-radius: 20px;
    margin: 5%;
    // margin-top: 17%;
    font-size: 1.2rem;
    width: 200px;
    min-width: 100px;
    cursor: pointer;
    font-family: 'Roboto Serif', sans-serif;

    &:hover{
        background: rgb(0, 0, 0);
    }


    a{
         color: rgba(245, 245, 245, 0.89);
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
     
  }
}
.header-right-part {
  flex-basis: $flexBasis;
  text-align: right;
  
}
</style>