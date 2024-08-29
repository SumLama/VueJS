<template>
    <div>
        <h3>Task tracker</h3>
        <form @submit.prevent="addTask"> 
            <input type="text" class="form-control" placeholder="Enter the task" v-model="text">
            <button type="submit" class="btn">Add task</button>
        </form>
        {{text}}
    </div>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
            text: ''
        }
    },
    methods: {
        addTask() {
            if (!this.text) {
                alert('Please enter a task');
                return;
            }
            const newTask = {
                id: Math.floor(Math.random() * 10000),
                text: this.text,
            };
            this.$emit('add-task', newTask);
            this.text = '';
        }
    }
}
</script>

<style scoped>
.btn {
    display: block;
    background-color: green;
    color: white; /* Add text color for better visibility */
}
</style>
