export const loginApi = async (email: string, password: string) => {
  try {
    const response = await fetch("http://localhost:8000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.detail || "Invalid email or password");
    }

    const data = await response.json();
    return data; // { token, user }
  } catch (err: any) {
    throw new Error(err.message || "Login failed");
  }
};
