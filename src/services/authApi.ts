const API_URL = "http://127.0.0.1:8000"

export async function signup(
  email: string,
  password: string,
  role: string,
  firstName: string = "",
  lastName: string = ""
) {
  try {
    const endpoint = `${API_URL}/api/auth/signup/`;
    console.log("Signup endpoint:", endpoint);
    
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        role,
        first_name: firstName,
        last_name: lastName,
      }),
    });
    
    console.log("Response status:", response.status);
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.log("Error response:", errorData);
      throw new Error(errorData.message || errorData.detail || `Signup failed: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error during signup:", error);
    throw error;
  }
}
export async function login(email: string, password: string) {
  try {
    const endpoint = `${API_URL}/api/auth/token/`;
    console.log("Login endpoint:", endpoint);
    const response = await fetch(endpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
    });
    console.log("Response status:", response.status);
    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.log("Error response:", errorData);
        throw new Error(errorData.message || errorData.detail || `Login failed: ${response.statusText}`);
    }
    return await response.json();

    } catch (error) {
        console.error("Error during login:", error);
        throw error;
    }
}

