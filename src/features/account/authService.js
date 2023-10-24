export const fakeAuthService = {
  login: (email, password) => {
    // Simulate authentication logic (replace with your own)
    if (email === "user@example.com" && password === "password") {
      return { success: true, username: "John Doe", email: "user@example.com" };
    } else {
      return { success: false, error: "Invalid email or password" };
    }
  },
};

