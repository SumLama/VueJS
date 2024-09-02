<script setup>
const CloseBox = ()=>{
    alert("Closing box");

}
const ModalBox= ()=>{
    alert("Modal box")
}
const Ok = ()=>{
    alert("Okay clicked......")
}

</script>
<template>
    <div class="container">
        <div class="dialog" >
            <div @click="ModalBox"><p >X</p> 
            <div>
            <p>You want to close the box</p>
            <button @click.stop="CloseBox">Cancel</button>
            <button @click="Ok"> Ok</button>
            </div>
        </div>
        </div>
    </div>

</template>
<style scoped>

.dialog{
    
    width: 200px;
    border: 1px solid black;
    margin: auto ;
    margin-top: 10rem;
}
button{
    padding:10px;
    margin: 10px;
}
</style>