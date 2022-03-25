<template>
  <div>
    <Header />

    <ProductsMainPage />

    <ServicesFirst id="services" />

    <ServicesSecond />

    <References />

    <Footer/>
  </div>
</template>

<script setup>
import Header from "../components/header/index.vue";
import ProductsMainPage from "../components/products/ProductsMainPage.vue";
import ServicesFirst from "../components/services/ServicesFirst.vue";
import ServicesSecond from "../components/services/ServicesSecond.vue";
import References from "../components/references/index.vue";
import Footer from "../components/footer/index.vue";
</script>

<style>
</style>