

<template>
  <div class="filter-conteiner">

      
                             <input class="input-search"  type="text" placeholder="ara (isim,model)">

     

      <button class="category-switch-box-button" @click="modelsFilterShow= !modelsFilterShow"> 
         <i v-show="modelsFilterShow"  class="fa-solid fa-angle-up"></i>
         <i v-show="!modelsFilterShow" class="fa-solid fa-angle-down"></i>
      
      <span style="margin-left:5px;"> Kategori </span> </button>
      <div class="category-box"  v-show="modelsFilterShow">
           
                   <ul>

                   

                   
                <li v-for="mdl in allModels" :key="mdl.id">
                      <input type="checkbox" :id="mdl.id" :value="mdl.name" v-model="modelsCheckbox">
                       <label :for="mdl.id">{{mdl.name}}</label>
                </li>
                </ul>
      
            
      </div>

  

         <button class="price-switch-box-button" @click="priceFilterShow= !priceFilterShow"> 
         <i v-show="priceFilterShow"  class="fa-solid fa-angle-up"></i>
         <i v-show="!priceFilterShow" class="fa-solid fa-angle-down"></i>
      
      <span style="margin-left:5px;"> Price </span> </button>
      <div class="category-box"  v-show="priceFilterShow">
           
                   <ul>

                 

                   
                <li v-for="mdl in allModels" :key="mdl.id+1">
                      <input type="checkbox" :id="mdl.id" :value="mdl.name" v-model="priceCheckbox">
                       <label :for="mdl.id">{{mdl.name}}</label>
                </li>
       
         </ul>
            
      </div>

            <button class="category-switch-box-button" @click="cateFilterShow= !cateFilterShow"> 
         <i v-show="cateFilterShow"  class="fa-solid fa-angle-up"></i>
         <i v-show="!cateFilterShow" class="fa-solid fa-angle-down"></i>
      
      <span style="margin-left:5px;"> Kategori </span> </button>
      <div class="category-box"  v-show="cateFilterShow">
           
               <ul>

             

                   
                <li v-for="mdl in allModels" :key="mdl.id">
                      <input type="checkbox" :id="mdl.id" :value="mdl.name" v-model="categoryCheckbox">
                       <label :for="mdl.id">{{mdl.name}}</label>
                </li>

                  </ul>
        
            
      </div>


  </div>
</template>

<script>
export default {

    data(){
        return {

            allModels:[
                {
                    id:1,
                    name:'dk2320-cam'
                },
                 {
                    id:2,
                    name:'ser2320-robotm'
                },
                 {
                    id:3,
                    name:'erk2320-cam'
                }
            ],
            modelsCheckbox:[],
            priceCheckbox:[],
            categoryCheckbox:[],
            

            modelsFilterShow:true,
             priceFilterShow:true,
             cateFilterShow:true,

        }
    }

}
</script>

<style lang="scss" scoped>




.filter-conteiner{
   width: 100%;
   
    padding-top: 3%;
    padding-left: 20%;

      position: sticky;
    top: 10px;

}
.category-switch-box-button , .price-switch-box-button{

    background: rgba(0, 0, 0, 0);
    color: rgb(4, 4, 17);
    font-size: 1.3rem;
    border:0;
    display: block;
    margin-top: 15%;
    
   

    cursor: pointer;
    


}

.price-switch-box-button{
    
}

.category-box{
padding-left: 1%;
    ul{

        list-style-type: none;
        padding: 0;

        li{
            margin: 5% auto;
            font-size: 0.9rem;

            label{
                    color: rgb(4, 4, 17);
                    padding-left: 5%;
                    cursor:pointer;

            }

        }
    }

}


     .input-search{

            font-size: 1rem;
           
            border: 0 ;
           border-bottom:0.5px solid black;
            margin-bottom: 15%;
            background: rgba(177, 175, 170, 0);
            width: auto;
            display: block;
            padding-top: 3px;
            padding-bottom: 3px;
            margin-top: 10%;
            transition: 0.5s all ease-in;
            
            &:focus{

                            border-radius: 10px;


                border:0.5px solid black;

                outline:0;

            }
            &::placeholder{
                text-align: center;
                color: rgb(85, 85, 85);
                          

            }
           
        }


</style>