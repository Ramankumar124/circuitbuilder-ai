import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
    firstName: string,
    lastName: string,
    email: string,
    id: string
}

interface AuthState {
  user: User | null;
  token: string | null;
}

const storedUser = localStorage.getItem('user');
const isaccess_token = localStorage.getItem('token');

const initialState: AuthState = {
  user: storedUser ? JSON.parse(storedUser) : null,
  token: isaccess_token ? JSON.parse(isaccess_token) : null,
};

// Update setToken action to expect a token of type string
export const authSlice = createSlice({
    initialState,
    name: 'auth',
    reducers: {
      setToken: (state, action: PayloadAction<string>) => { // Accepts token as string
        const token = action.payload; // Extract token directly
      
        try {
          const base64Url = token.split('.')[1]; // Extract payload part of JWT
          if (!base64Url) throw new Error("Invalid token format");
      
          const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
          const decodedPayload = atob(base64);
          const user = JSON.parse(decodedPayload);
      
          state.user = user;
          state.token = token;
      
          localStorage.setItem('token', JSON.stringify(token));
          localStorage.setItem('user', JSON.stringify(user));
        } catch (error) {
          console.error("Failed to decode token:", error);
          state.user = null;
          state.token = null;
        }
      },
      
      
      remove: (state) => {
        state.user = null;
        state.token = null;
        localStorage.clear();
      },
    },
  });
  