export default defineEventHandler(async (event) => {
    const {API_URL} = useRuntimeConfig();
    const todos = await $fetch(`${API_URL}/todos`);
    return todos.slice(0,3);
  });