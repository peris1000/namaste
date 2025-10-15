import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

const appStore = configureStore({
  reducer: {
    // the whole app reducer, here we can add more reducers
    cart: cartReducer,
    // user: userReducer,
  },
});

export default appStore;
