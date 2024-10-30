export default defineEventHandler(async (event) => {
    const {API_URL} = useRuntimeConfig();
    const { id } = event.context.params;
    await $fetch(`${API_URL}/todos/${id}`, { method: 'DELETE' });
    return { message: 'Todo deleted successfully' };
  });
  