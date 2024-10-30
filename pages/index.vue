<script setup>

const { fetchTodos, updateTodo, deleteTodo } = useTodos();
const todoStore = useTodoStore();
const { todos } = storeToRefs(todoStore);

onMounted(() => {
  fetchTodos();
});

const toggleComplete = (todo) => {
  updateTodo(todo.id, { completed: todo.completed });
};
</script>

<template>
  <div class="todo-container">
    <TodoForm />
    <ul class="todo-list">
      <li v-for="todo in todos" :key="todo.id" class="todo-item">
        <input
            type="checkbox"
            v-model="todo.completed"
            @change="toggleComplete(todo)"
            class="todo-checkbox"
          />
          <span :class="{ completed: todo.completed }">{{ todo.title }}</span>
          <button @click="deleteTodo(todo.id)" class="delete-button">Delete</button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.todo-container {
  max-width: 600px;
  margin: auto;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.todo-list {
  list-style-type: none;
  padding: 0;
}

.todo-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #dee2e6;
}

.todo-checkbox {
  margin-right: 10px;
}

.delete-button {
  padding: 5px 10px;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.delete-button:hover {
  background-color: #c82333;
}

.completed {
  text-decoration: line-through;
  color: #6c757d;
}
</style>
