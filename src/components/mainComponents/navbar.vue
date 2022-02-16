<template>
  <div id="nav" ref="navScroll" @scroll.passive="scroll($event)">
    <ul class="navbar">
      <li @click="active('mainPage')" class="nav-item"> <a href="#header" :class="{ active:activeLink=='mainPage'}"> Anasayfa</a> </li>
      <li @click="active('products')" class="nav-item"><a href="#container-products" :class="{ active:activeLink=='products'}"> Ürünler</a></li>
      <li @click="active('refarence')" class="nav-item"><a href="#referance" :class="{ active:activeLink=='refarence'}"> Referans</a></li>
      <li @click="active('about')" class="nav-item"><a href="#about" :class="{ active:activeLink=='about'}"> Hakkımızda</a></li>
      <li @click="active('footer')" class="nav-item"><a href="#footer" :class="{ active:activeLink=='footer'}"> İLETİŞİM</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  created() {
    document.addEventListener("scroll", (e) => {
      this.scroll();
    });
  },
  methods: {
    scroll() {
      if(window.scrollY>160){
        this.$refs.navScroll.style="border-top:none;";
      }
      else{
        this.$refs.navScroll.style="border-top:1px solid white;";
      }
      
      console.log(window.scrollY);
    },
    active(name) {
      this.activeLink = name;
    },
  },
  data(){
    return {
      activeLink:"",
    }
  }
};
</script>

<style>
#nav {
  height: 70px;
  display: flex;
  flex-flow: row wrap;
  border-top: 1px solid white;
  background-color: #232f3e;
  width: 100%;
  position: sticky;
  top: 0;
  margin-top: 0;
}
.navbar {
  color: white;
  text-align: center;
  text-decoration: none;
  width: 80%;
  margin: auto;
}
.navbar a {
  text-decoration-line: none;
  color: #fff;
}
.nav-item {
  display: inline-block;
  list-style-type: none;
  margin: 10px 2%;
  font-family: "Rubik", sans-serif;
  font-size: 1.2rem;
  text-transform: uppercase;
}
.nav-item a:hover {
  color: #e4964d;
}
.active {
  color: #e4964d !important;
}
</style>