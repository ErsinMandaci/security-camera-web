<template>



<div class="sort-comp">
<SortComponent/>
</div>
<div class="container-products-all">

    <div class="filter-part">
            <Filter/>
    </div>

    <div class="products-part">
        <Products/>

    </div>

</div>

</template>

<script>
import Filter from "./ProductFilter.vue"
import Products from "./ProductAll.vue"
import SortComponent from "./SortComponent.vue"
export default {

    components:{
        Filter,
        Products,
        SortComponent
    }

}
</script>

<style lang="scss" scoped>

.container-products-all{
    width: 100%;
    display: flex;
    margin-top: 2%;
    

}

.filter-part{
   flex-basis: 15%;
   
  
}
.products-part{
    flex-basis: 85%;

}
.sort-comp{
    margin-top: 3%;
    text-align: center;
}

</style>