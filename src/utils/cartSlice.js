import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // initial state
  },
  reducers: {
    addItem: (state, action) => {
      // old redux way, without toolkit
      // const newState = [...state]; // get the previous state shallow-copy
      // newState.items.push(action.payload); // add stuff to the new state
      // return newState; // return the new instead of old state, because it was a thumb-rule DONT MUTATE THE STATE

      // reducer function, directly mutating the state is allowed with redux toolkit. Uses Immer behind the scenes!
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      // reducer function
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
