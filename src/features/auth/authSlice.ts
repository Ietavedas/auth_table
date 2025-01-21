import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState, User } from './types';

const initialState: AuthState = {
  user: null,
  error: null,
  isAuthenticated: false
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginRequest: (state, action: PayloadAction<{ email: string, password: string }>) => {
      state.error = null;
    },
    loginSucsess: (state, action: PayloadAction<User>) => {
      console.log(action.payload)
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isAuthenticated = false;
    }
  }
});

export const { loginRequest, loginSucsess, loginFailure} = authSlice.actions;
export default authSlice.reducer;