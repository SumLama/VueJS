<script setup>
import { reactive, ref } from 'vue';

const user = reactive({
    email: '',
    password:''
})

const Login = ()=>{
    let users = JSON.parse(localStorage.getItem('users'));
    
    users.forEach(u => {
     
        if (u.email == user.email && u.password== user.password){
            console.log("hello")
            alert("login successfull")
     }
     else{
        alert("Invalid email or password")
     }
   

    }); 

     

}

</script>
<template>
    <div class="container">
        <div class="form-container" >
            <h2 style="text-align: center;"> Sign In</h2>
            <form name="loginForm" @submit.prevent="Login" >
                <div class="form-field"> 
                    <label>Email</label><br/>
                    <input type="email" name="email" v-model="user.email" required/>
                </div>
                <div class="form-field"> 
                    <label>password</label><br/>
                    <input type="password" name="password" v-model="user.password" required/>
                </div>
                <div class="button-control">
                    <button >Sign in</button>
                </div>
            </form>
        </div>
    </div>
</template>
<style scoped>
.container{
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    
}
.form-container{
    background-color: rgb(230, 229, 229);
    padding:1.7rem;
    padding-top: 0;
    border: 1px rgb(127, 121, 121);
    border-radius:10px;
    box-shadow: 3px rosybrown;
}
.form-field{
    margin-top: 12px;
}
.form-field label{
    font-size:1rem; 
               
}
.form-field input{
    height:2.25rem;
    width:20rem;
    margin-top: 0.3rem;
    border-radius: 0.2rem;
    box-shadow: 3px;
    border: none;
}
.button-control{
    text-align: center;
}

.button-control button{
    margin: 1.5rem;
    /* width:6rem; */
    padding:10px 30px;
    font-size: 1rem;
    border-radius: 8px;
    background-color:#9cb9b5;
    cursor: pointer; 
    border: none;
        
}
</style>