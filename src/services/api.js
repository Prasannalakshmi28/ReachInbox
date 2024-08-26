export const fetchOneBoxList = async () => {
    const response = await fetch('/api/onebox/list');
    return await response.json();
  };
  
  export const deleteThread = async (thread_id) => {
    await fetch(`/api/onebox/${thread_id}`, {
      method: 'DELETE',
    });
  };
  export const replyToThread = async (thread_id, payload) => {
    await fetch(`/api/reply/${thread_id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
  };
  