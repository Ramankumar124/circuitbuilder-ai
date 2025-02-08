//AuthSclie to store and reterive user Information and token in local Storage

import { createSlice,PayloadAction } from "@reduxjs/toolkit";

interface loginSignupRes {
    user: {
      _id: string | null,
      name: string | null,
      email: string | null,
      mobile: string | null,
      isVerified: boolean,
      googleId: null | string,
      facebookId: null | string,
      linkedinId: null | string,
      createdAt: string | null,
      updatedAt: string | null,
    } | null;
    token: string | null;
}

const storedUser = localStorage.getItem('user');
const isaccess_token = localStorage.getItem('token');

const initialState: loginSignupRes = { 
user: storedUser ? JSON.parse(storedUser) : null,
token: isaccess_token ? JSON.parse(isaccess_token) : null,
};


export const authSlice = createSlice({
    initialState,
    name: 'auth',

    reducers: {
        setToken: (state, action: PayloadAction<loginSignupRes>) => {
            const {token} = action.payload
            const base64Url = token?.split('.')[1]; 
            if (!base64Url) return;
            const base64 = base64Url.replace('-', '+').replace('_', '/');
            const user = decodeURIComponent(atob(base64).split('').map(function(c) {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            }).join(''));
            state.user = JSON.parse(user)
            state.token = token;
            
            localStorage.setItem("token", JSON.stringify(token));
            localStorage.setItem("user", JSON.stringify(user));

        },

        remove: (state) => {
            state.user = null
            state.token = null
            localStorage.clear();
        }
    }
})

export const {setToken,remove } = authSlice.actions
export default authSlice.reducer;