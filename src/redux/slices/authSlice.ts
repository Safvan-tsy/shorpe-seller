import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Seller } from '../../types/seller.types';
import { AuthState } from '../../types/slice.types';

const initialState: AuthState = {
  sellerInfo:null,
  token: null
};


const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<{ data: { seller:Seller }, token: string }>) => {
      state.sellerInfo = action.payload.data.seller;
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.sellerInfo = null;
      state.token = null;
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;