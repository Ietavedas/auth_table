export interface User {
  id: string;
  email: string;
}

export interface AuthState {
  user: User | null;
  error: string | null;
  isAuthenticated: boolean;
}