<script setup>

const todoStore = useTodoStore();
const todoCount = computed(() => todoStore.todoCount);
</script>

<template>
    <header class="header">
      <h1>Todo App</h1>
      <p>Total Todos: {{ todoCount }}</p>
    </header>
  </template>
  
  
  <style scoped>
  .header {
    padding: 1rem;
    background-color: #007bff;
    color: #fff;
    text-align: center;
  }
  </style>
  