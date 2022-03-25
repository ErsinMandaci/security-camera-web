<template>
  
  <div class="computer-container">

        <h3 >
            <i class="fa-solid fa-laptop-code"></i> Marmara digital ;
            </h3>
         
      <p >
          
{{lastSentence}}
         <span v-show="stick">|</span>
          
      </p>
  </div>
</template>

<script>
export default {
props:{
heightScreen:{
    default:240
},

arraySentence:{
    type:String,
    default:`Bilişim sektöründe en iyi hizmeti, en ileri teknolojiyi, en fonksiyonel ürünleri hedef müşteri grubumuza sunuyoruz. Müşteri ve çalışan değerimizi en üst düzeyde tutarak kaliteli iş ortaya koyuyoruz.`
         
}
},
    data(){
        return {
            
           

            arraySecond:'',

            index:0,
            statusStick:true,
            initialHeight:`${this.heightScreen}px`
        }
    },
    computed:{

    lastSentence(){
        return this.arraySecond;
    },
    stick(){
        return this.statusStick;
    }
    },

    methods:{

            stickMet(){
                  let _this=this;

                             var stick=setInterval(() => {
                              
                          _this.statusStick=!_this.statusStick;
                         
                
            }, 500);

            },
        
        sentenceAnimaation(){
 

                       let _this=this;

                 

                    let animationInterval= setInterval(() => {
                    _this.arraySecond+=_this.arraySentence[_this.index];
                
        
                   
                           if(this.arraySentence.length-1 == this.index){
             
     clearInterval(animationInterval);
     
     


            }  
            else{
                 _this.index++;

                 
                
           

            }
                   
                }, 150);

         
           
        }

    },

        mounted(){
            this.sentenceAnimaation();
            this.stickMet();
      
        },

        unmounted(){
            this.arraySecond='';
        }


    
    

}
</script>

<style scoped lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Questrial&display=swap');


.computer-container{
      font-family: 'Questrial', sans-serif;

    position: relative;
    background: rgb(31, 31, 31);
  overflow-wrap: break-word;
    width: 100%;


   
    max-height: fit-content;
             min-height:v-bind(initialHeight);

    border:0;
    border-radius: 10px;
    padding-top: 1%;
    padding-bottom: 1%;
    
}

p{
    text-align: justify;
    font-size: 1.25rem;
    font-weight: bold;
line-height: 1.5;
    
    width: 80%;
    margin: auto;
        color:rgba(255, 225, 0, 0.871);


      transition: 0.2s all ease-in-out;
   span{
        transition: 0.5s all ease-in;
   }
}

h3{
     width: 80%;
         font-size: 1.4rem;

    margin: 10px auto;
      color: rgba(255, 255, 255, 0.884);
    
}

</style>