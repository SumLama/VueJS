<script setup>
// import Header from './components/Header.vue';
import Vbind from './components/Vbind.vue';
import SignUp from './components/SignUp.vue';

</script>
<template>
  <!-- <div>
    <Header @add-task="addTask"/>
    <div v-for="task in tasks" :key="task.id">
        <h3>{{ task.text }}</h3>
    </div>
  </div> -->
<SignUp/>  
<!-- <Vbind/> -->

</template>


//   methods: {
//     addTask(task) {
//       this.tasks = [...this.tasks, task];
//     }
//   },
//   data() {
//     return {
//       tasks: [
//         { id: 1, text: "Doctors appointment", date: "March 1st" },
//         { id: 2, text: "Gym appointment", date: "March 2nd" },
//         { id: 3, text: "School meeting", date: "March 3rd" }
//       ]
//     };
//   }
//

