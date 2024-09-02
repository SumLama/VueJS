import { createRouter,createWebHistory } from "vue-router";
import Products from "@/components/Products.vue";
import Home from "@/components/Home.vue";
import SignUp from "@/components/SignUp.vue";
import Vbind from "@/components/Vbind.vue";
const routes =[
    {path:'/',component:Home},
    { path:'/products',component:Products},
    { path:'/signin',component:Vbind},
    { path:'/signup',component:SignUp}
  
];

const router = createRouter({
    history:createWebHistory(),
    routes,
});
export default router;