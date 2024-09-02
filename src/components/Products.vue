<script setup>
import { ref, computed } from 'vue';
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

const totalPrice = computed(() => {
    return cartItem.value.reduce((total, item) => {
        return total + (item.price * item.quantity);
    }, 0);  // Ensure initial value for reduce is set to 0
});

</script>
<template>
    <div class="container">
        <div style="text-align: center;">
            <h2>Product Listing</h2>
        </div>

        <div class="product-grid">
            <div v-for="prod in products" :key="prod.id">
                <Product :image="prod.image" :title="prod.title" :price="prod.price" />
                <button class="button-control" @click.prevent="addToCart(prod)">
                    Add to cart
                </button>
            </div>

        </div>



        <div v-if="cartItem.length > 0">
            <h2>Cart Items</h2>
            <div class="cart-control">
                <div v-for="item in cartItem" :key="item.id" class="cart">
                    <img :src="item.image" :alt="item.title" height="150px" width="150px">
                    <p>Title: {{ item.title }}</p>
                    <p>Quantity: {{ item.quantity }}</p>


                    <p>Price:$ {{ item.price * item.quantity }}</p>
                    
                </div>




            </div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <div class="cart1">
                                <th>Index</th>
                                <th>Product</th>
                                <th>Quantity</th>
                                <th>Price</th>
                            </div>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>

                                <div v-for="(item, index) in cartItem" :key="item.id" class="cart1">
                                    <p>{{ index + 1 }}</p>
                                    <img :src="item.image" :alt="item.title" height="150px" width="150px">

                                    <p> {{ item.quantity }}</p>
                                    <p>$ {{ item.price * item.quantity }}</p>
                                </div>
                                


                            </td>
                        </tr>
                        <div class="price" >
                                    <p>TotalPrice: $ {{ totalPrice }}</p> 
                        </div>
                    </tbody>

                </table>
            </div>

        </div>

    </div>



</template>
<style scoped>
.product-grid {

    display: grid;
    margin-top: 3rem;
    margin-left: 5rem;
    grid-template-columns: auto auto auto auto ;
    grid-template-rows: auto;
    gap: 20px;
}


.button-control {
    padding: 6px 8px;
    font-size: 14px;
    background-color: rgb(144, 199, 195);
    border-radius: 4px;
    cursor: pointer;
    border: none;

}

@media screen and (max-width:768px) {
    .product-grid {
        margin-left: 0px;
        grid-template-columns: auto auto;

    }

    .product-grid img {
        display: block;
        margin-left: auto;
        margin-right: auto;
    }

}

@media screen and (max-width:576px) {
    .product-grid {
        margin-left: 0px;
        margin: 1 rem;
        grid-template-columns: auto;

    }

    .product-grid img {
        display: flex;
        justify-content: center;
    }
}

.cart-control {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

}

.cart {
    margin: 20px 20px;
    padding: 5px;
    border: 3px solid brown;
    width: 200px;
    height: 350px;



}

table{
    width: 100vw;
}
td{
    border-top: 1px solid black;
    border-bottom: 1px solid black
}

.cart1 {
    display: flex;
    justify-content: space-between;
    margin: 2rem 4rem;
    font-size: 20px;
    
}
.price{
    display: flex;
    justify-content: end;
margin: 2rem 4rem;
    font-size: 20px;
}
</style>