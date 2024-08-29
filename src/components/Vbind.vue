<script setup>
import { ref } from 'vue';
const credentials ={ 
    email:"user@gmail.com",
    password:"user123"

}
const email = ref('');
const password = ref('');
const IsLoggedin =ref(false)
 const ValidateUser=()=>{
    if(email.value ==credentials.email && password.value == credentials.password){
        IsLoggedin.value = true;
        alert("Login successfull");
    }
    else{
        alert("Error occured");
    }
   
 }
 


</script>
<template>
    <div class="container">
        <div v-if="!IsLoggedin">
            <form name="loginForm" @submit.prevent="ValidateUser()" >
                <div class="form-control">
                    <label>Email:</label>
                    <input type="email" name="email" placeholder="Enter your email"  v-model="email">
                </div>
                <div class="form-control">
                    <label>password:</label>
                    <input type="password" name="passoword" placeholder="Enter your password" v-model="password"/>
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
        <div v-else>
        <p>Hello welcome</p>
    </div>
    </div>
  

</template>
<style scoped>

</style>