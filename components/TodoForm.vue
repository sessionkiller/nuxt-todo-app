<script setup>

const { addTodo } = useTodos();
const title = ref('');

const handleSubmit = () => {
  if (title.value.trim()) {
    addTodo(title.value);
    title.value = '';
  }
};
</script>

<template>
    <form @submit.prevent="handleSubmit" class="form-container">
      <input v-model="title" placeholder="Add a new todo" required class="todo-input" />
      <button type="submit" class="add-button">Add Todo</button>
    </form>
  </template>

<style scoped>
.form-container {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.todo-input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ced4da;
  border-radius: 4px;
  font-size: 16px;
}

.add-button {
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.add-button:hover {
  background-color: #0056b3;
}

</style>
  