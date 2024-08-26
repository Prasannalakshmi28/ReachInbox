export const authenticateUser = async (token) => {
    try {
      // Example of authenticating the token with your backend
      const response = await fetch('/api/auth/google', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
      });
      return await response.json();
    } catch (error) {
      console.error('Error authenticating user:', error);
      return { success: false };
    }
  };
  