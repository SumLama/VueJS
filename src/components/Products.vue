<script setup>
import { ref } from 'vue';
import Product from './Product.vue';

const products = ref([]);
const cartItem = ref([]);



const fetchProducts = async () => {
    try {
        const response = await fetch('https://fakestoreapi.com/products?limit=12');
        console.log(response); 
      
        const data = await response.json();
        console.log(data); 
        
        products.value = data;
    } catch (error) {
        console.error('Fetching error', error);
    } 
};

fetchProducts();

const addToCart = (product) => {
      const existingItem = cartItem.value.find((item) => item.id === product.id);
      if (existingItem) {
        existingItem.quantity++;
        alert("Added to cart successfully..")
      } else {
        cartItem.value.push({ ...product, quantity: 1 });
        alert("Added to cart successfully..")
        
      }
     
     
    };


</script>
<template>
    <div class="container">
        <div style="text-align: center;"><h2>Product Listing</h2></div>
       
            <div class="product-grid">
                <div v-for="prod in products" :key="prod.id" >
                    <Product :image="prod.image" :title="prod.title" :price="prod.price"/> 
                    <button class="button-control" @click.prevent="addToCart(prod)">
                Add to cart
            </button>
        </div>
        
            </div>

                    
        
    <div v-if="cartItem.length > 0">
      <h2>Cart Items</h2>
      <div class="cart-control">
      <div v-for="item in cartItem" :key="item.id" class="cart">
        <h5><img :src="item.image" :alt="item.title" height="150px" width="150px"></h5>
        <h5>Title: {{ item.title }}</h5>
        <h5>Quantity: {{ item.quantity }}</h5>
      </div>


    </div>

    </div>

        </div>
       
 

</template>
<style scoped>
.product-grid {
   
    display:grid; 
    margin-top: 3rem;
   margin-left: 5rem;
    grid-template-columns: auto auto auto auto;
    grid-template-rows: auto;
    gap: 20px;
}


.button-control{
    padding: 6px 8px;
    font-size: 14px;
    background-color: rgb(144, 199, 195);
    border-radius: 4px;
    cursor: pointer;
    border: none;

}

@media screen and (max-width:768px) {
    .product-grid{
        margin-left: 0px;
        grid-template-columns: auto auto;

    }
    .product-grid img{
    display:block;
    margin-left: auto;
    margin-right: auto;
}
    
}
@media screen and (max-width:576px) {
    .product-grid{
        margin-left: 0px;
        margin: 1 rem;
        grid-template-columns: auto;

    }
    .product-grid img{
    display: flex;
    justify-content: center;
}
} 

.cart-control{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
}
.cart{
    margin: 20px 0px;
    padding: 10px;
    border: 3px solid brown;
    width: 200px;
    height: 300px;
 

   
}  
</style>