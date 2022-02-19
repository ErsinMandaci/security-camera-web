import {createRouter,createWebHistory} from 'vue-router'


const routes = [

    {
        path:"/",
        name:"MainPage",
        component:()=>import("../views/MainPage.vue"),
        meta:{

        }
    },

    {
        path:"/products",
        name:"products",
        component:()=>import("../views/ProductPage.vue"),
        meta:{

        }
    }


]

 const router=createRouter({

    history:createWebHistory(),
    routes

})

export default router;