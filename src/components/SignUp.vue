<script setup>
import { ref, reactive } from 'vue';
import Vbind from './Vbind.vue';

const user = reactive({
  fname: '',
  email: '',
  password: '',
  confirmpassword: '',
});


const errors =reactive({
  fname: false,
  email: false,
  password: false,
  confirmpassword: false,
  Invalid:false
 
});
const validateUser=()=>{
  errors.fname = false;
  errors.email = false;
  errors.password = false;
  errors.confirmpassword = false;
  errors.Invalid = false;
 
  if(user.fname ==''){
      errors.fname=true
  }
  if(user.email ==''){
      errors.email=true
  }
  if(user.password==''){
      errors.password=true
  }
  if(user.password!==user.confirmpassword){
      errors.confirmpassword=true
  }
  if(errors.fname || errors.email || errors.password || errors.confirmpassword){
    errors.Invalid = true
  }
  return 
}

const onSubmit = () => {
  validateUser()
  if(!errors.Invalid){
  const userData = {
    name:user.fname,
    email:user.email,
    password:user.password
  }
  let users = JSON.parse(localStorage.getItem('users',))||[]
  console.log('Users ', users);

  users.push(userData);
  localStorage.setItem('users',JSON.stringify(users))
  alert('User registered successfully!');  
 
  user.fname = '';
  user.email = '';
  user.password = '';
  user.confirmpassword = '';
  errors.Invalid=false;
 
  } else {
    
    alert('Cannot regsiter....Try again');
  }
  const testalert = ()=>{
    alert("hello");

  }

}
</script>

<template>
  <div class="container">
    <div class="form-container">
    <h2 style="text-align: center">Sign Up</h2>
    <form @submit.prevent="onSubmit">
      <div class="form-field"> 
        <label>Fullname</label><br/>
        <input type="text"  v-model="user.fname"/>
      </div>
      <div v-if="errors.fname && !user.fname"  class="error-message"><p>Fullname is required</p></div>
      
      <div class="form-field">
        <label>Email</label><br/>
        <input type="email"  v-model="user.email"/>
      </div>
      <div v-if="errors.email && !user.email" class="error-message"><p>Email is required</p></div>
      
      <div class="form-field">
        <label>Password</label><br/>
        <input type="password" v-model="user.password"/>
      </div>
      <div v-if="errors.password && !user.password" class="error-message"><p>Password is required</p></div>
      
      <div class="form-field">
        <label>Confirm Password</label><br/>
        <input type="password" v-model="user.confirmpassword"/>
      </div>
      <div v-if="errors.confirmpassword && !user.password " class="error-message"><p>Passwords do not match</p></div>
      <div class="button-control" >
      <button type="submit">Sign up</button>
    </div>
    <div class="text-control">Already have an account?<a href="#">Sign in</a></div>
   
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

  .error-message{
    color:red;
    margin-top: 0px
  }

  .button-control{
    /* display: flex;
    justify-content: center; */
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
  .text-control{
    font-size: small;
    display: flex;
    justify-content: center;
  }
</style>
