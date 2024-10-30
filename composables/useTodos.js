
const apiBase = '/api/todos';

export const useTodos = () => {
  const todoStore = useTodoStore();

  const fetchTodos = async () => {
    const todos = await $fetch(`${apiBase}`);
    todoStore.setTodos(todos);
  };

  const addTodo = async (title) => {
    const newTodo = await $fetch(`${apiBase}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, completed: false }),
    });
    todoStore.addTodo(newTodo);
  };

  const updateTodo = async (id, updatedTodo) => {
    await $fetch(`${apiBase}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedTodo),
    });
    const todoIndex = todoStore.todos.findIndex(todo => todo.id === id);
    todoStore.todos[todoIndex] = { ...todoStore.todos[todoIndex], ...updatedTodo };
  };

  const deleteTodo = async (id) => {
    await $fetch(`${apiBase}/${id}`, { method: 'DELETE' });
    todoStore.removeTodo(id);
  };

  return {
    fetchTodos,
    addTodo,
    updateTodo,
    deleteTodo,
  };
};
