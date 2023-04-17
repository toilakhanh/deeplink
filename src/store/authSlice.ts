import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {apiPost} from '../services/api';
import {LOGIN} from '../services/endPoint';
import {getUserToken, saveUserToken} from '../utils/storage';

type dataType = {
  token: string;
};

export interface AuthState {
  loading: boolean;
  error: any;
  data: dataType | null;
}

export interface AccountState {
  email: string;
  password: string;
}

const initialState: AuthState = {
  loading: false,
  error: null,
  data: null,
};

export const login = createAsyncThunk(
  'auth/login',
  async (account: AccountState) => {
    const response = await apiPost(LOGIN, account);
    return response.data;
  }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loadToken: (state, action) => {
      state.data = {token: action.payload};
    },
  },
  extraReducers: builder => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
        saveUserToken(action.payload.token);
      })
      .addCase(login.pending, state => {
        state.loading = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.data = null;
        state.error = action.payload;
      });
  },
});

export const {loadToken} = authSlice.actions;

export default authSlice.reducer;
