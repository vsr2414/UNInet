
import type { AuthResponse, LoginData, RegisterData } from "../types/auth";

const API_URL = "http://localhost:5000/api/auth";

async function handleResponse(response: Response): Promise<AuthResponse> {
  const data = (await response.json()) as AuthResponse;

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong.");
  }

  return data;
}

export async function loginUser(
  credentials: LoginData
): Promise<AuthResponse> {
  const response = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });

  return handleResponse(response);
}

export async function registerUser(
  userData: RegisterData
): Promise<AuthResponse> {
  const { confirmPassword, ...registrationData } = userData;

  if (userData.password !== confirmPassword) {
    throw new Error("Passwords do not match.");
  }

  const response = await fetch(`${API_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(registrationData),
  });

  return handleResponse(response);
}
