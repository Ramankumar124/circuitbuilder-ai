import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { decodeJWT } from "../../utils/decodeToken";

interface User {
  firstName: string;
  lastName: string;
  email: string;
  id: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
}

const storedUser = localStorage.getItem("user");
const isaccess_token = localStorage.getItem("token");

const initialState: AuthState = {
  user: storedUser ? JSON.parse(storedUser) : null,
  token: isaccess_token ? JSON.parse(isaccess_token) : null,
};

// Update setToken action to expect a token of type string
export const authSlice = createSlice({
  initialState,
  name: "auth",
  reducers: {
    setToken: (state, action: PayloadAction<AuthState>) => {
      // Accepts token as string
      const { token } = action.payload;

      // Decode the payload from the token
      if (token) {
        const decodedPayload = decodeJWT(token);
        state.token = token
        state.user = decodedPayload;

        //save on localStorage.
        localStorage.setItem("token", JSON.stringify(token))
        localStorage.setItem("user", JSON.stringify(decodedPayload));
      }      
    },

    remove: (state) => {
      state.user = null;
      state.token = null;
      localStorage.clear();
    },
  },
});

export const { setToken, remove } = authSlice.actions;
export default authSlice.reducer;
