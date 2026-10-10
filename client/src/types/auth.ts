
export interface LoginData {
  email: string;
  password: string;
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface AuthResponse {
  message: string;
  token?: string;
  user?: {
    id: string;
    name: string;
    email: string;
  };
}
