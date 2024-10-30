// stores/useTodoStore.js

export const useTodoStore = defineStore('todoStore', () => {
  const todos = ref([]);

  // Action to set the initial list of todos
  const setTodos = (newTodos) => {
    todos.value = newTodos;
  };

  // Action to add a new todo
  const addTodo = (newTodo) => {
    todos.value.unshift(newTodo);
  };

  // Action to remove a todo by ID
  const removeTodo = (id) => {
    todos.value = todos.value.filter(todo => todo.id !== id);
  };

  // Getter to count todos
  const todoCount = computed(() => todos.value.length);

  return {
    todos,
    setTodos,
    addTodo,
    removeTodo,
    todoCount,
  };
});
