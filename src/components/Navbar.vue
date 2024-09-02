<script setup>

</script>
<template>
<div class="container">
    <div class="navbar">
         <ul>
            <li><router-link to="/" class="link-control">Home</router-link></li>
            <li><router-link to="/products" class="link-control"> Products</router-link></li>
            <li><router-link to="/signup" class="link-control">Sign up</router-link></li>
            <li><router-link to="/signin" class="link-control"> Sign in</router-link></li>
         </ul>
    </div>
</div>
</template>
<style scoped>
.navbar{
    display: flex;
    align-items: center;
    height: 50px;
    justify-content: space-around;
    width: 100vw;
    background-color: rgb(218, 216, 206);
    border: 0.5px;
    
}
li{
    display: inline;
   
    cursor: pointer;
 
    padding: 2rem 3rem;
    text-decoration: none;
}
.link-control{
    text-decoration: none;
    color: black;
}

</style>