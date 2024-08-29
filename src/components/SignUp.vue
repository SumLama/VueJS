<script setup>
import { ref, reactive } from 'vue';


const user = reactive({
  fname: '',
  email: '',
  password: '',
  confirmpassword: ''
});


const errors = reactive({
  fname: false,
  email: false,
  password: false,
  confirmpassword: false
});


const onSubmit = () => {

 
    errors.fname = false;
    errors.email = false;
    errors.password = false;
    errors.confirmpassword = false;
    if(user.fname==''){
        errors.fname=true
    }
    if(user.email==''){
        errors.email=true
    }
    if(user.password==''){
        errors.password=true
    }
    if(user.password!=user.confirmpassword){
        errors.confirmpassword=true
    }

   

 
}
</script>

<template>
  <div class="container">
    <div class="form-container">
    <h2 style="text-align: center">Register</h2>
    <form @submit.prevent="onSubmit">
      <div class="form-field"> 
        <label>Fullname</label><br/>
        <input type="text" placeholder="Fullname" v-model="user.fname"/>
      </div>
      <div v-if="errors.fname" class="error-message"><p>Fullname is required</p></div>
      
      <div class="form-field">
        <label>Email</label><br/>
        <input type="email" placeholder="Email" v-model="user.email"/>
      </div>
      <div v-if="errors.email" class="error-message"><p>Email is required</p></div>
      
      <div class="form-field">
        <label>Password</label><br/>
        <input type="password" placeholder="Password" v-model="user.password"/>
      </div>
      <div v-if="errors.password" class="error-message"><p>Password is required</p></div>
      
      <div class="form-field">
        <label>Confirm Password</label><br/>
        <input type="password" placeholder="Confirm Password" v-model="user.confirmpassword"/>
      </div>
      <div v-if="errors.confirmpassword"class="error-message"><p>Passwords do not match</p></div>
      <div >
      <button type="submit" class="btn">Register</button>
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
    }
    .error-message{
        color:red;
        margin-top: 0px
    }

    .btn{
        margin-top: 1rem;
        width:6rem;
        padding:8px;
        font-size: 0.9rem;
        border-radius: 5px;
        background-color:#9cb9b5;
        cursor: pointer;
        
    }
</style>
