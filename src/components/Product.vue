<script setup>
const props=defineProps({
    image:String,
    title:String,
    price:Number
})
</script>
<template>
        <div>
            <img :src="image" :alt="title" height="200px" width="200px" >
        </div>
        <div>
            <h5>Product: {{title }}</h5>
            <h5>Price: ${{ price }}</h5>
            
        </div>
            
        
       
 

</template>
