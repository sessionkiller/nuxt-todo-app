export default defineEventHandler(async (event) => {
    const {API_URL} = useRuntimeConfig();
    const body = await readBody(event);
    const newTodo = await $fetch(`${API_URL}/todos`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    return newTodo;
  });
  