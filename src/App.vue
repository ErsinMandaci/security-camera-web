<script setup>
import Header from "./components/header/index.vue";
import ProductsMainPage from "./products/ProductsMainPage.vue";
import ServicesFirst from "./components/services/ServicesFirst.vue";
import ServicesSecond from "./components/services/ServicesSecond.vue";
import References from "./components/references/index.vue";
</script>

<template>
  <div>
    <Header/>
    <ProductsMainPage/>
    <ServicesFirst/>
    <ServicesSecond/>
    <References/>
  </div>
</template>

<style>
#app {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Rubik", sans-serif;
}
</style>
