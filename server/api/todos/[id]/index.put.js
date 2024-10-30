export default defineEventHandler(async (event) => {
    const {API_URL} = useRuntimeConfig();
    const { id } = event.context.params;
    const body = await readBody(event);
    await $fetch(`${API_URL}/todos/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    return { message: 'Todo updated successfully' };
  });
  