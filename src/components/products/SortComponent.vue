<template>
  
  <div style="position:relative;"  >
      <span class="icon-sort"> <i class="fa-solid fa-align-left"></i> Sirala   </span>
      <select name="sort" id="sortSelect" v-model="sortSelection">
          <option value="a-z">
              A-Z
          </option>
           <option value="ce">
              Ucuzdan pahaliya 
          </option>
           <option value="ec">
              Pahalidan ucuza
          </option>
      </select> 

      
  </div>
</template>

<script>
export default {

    data(){
        return {
            sortSelection:[]

        }
    }


}
</script>

<style scoped lang="scss">

select{
    border:0;
    width: 19%;

    border-bottom:1px black solid;

    &:focus{
        outline: 0;

    }
    

    option{
           color: rgb(21, 15, 29);
           font-size: 1rem;


         
           
    }
}
.icon-sort{
    position: relative;
    left:5%;
    font-size: 1.05rem;
    color: rgb(21, 15, 29);
}

</style>