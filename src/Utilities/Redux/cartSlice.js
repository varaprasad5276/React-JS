import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    // addItem , removeItem , clearCart are a Action's and  inside's they are a Reducer function's
    // it will modify our state based on action
    addItem: (state, action) => {
      state.items.push(action.payload);
    },

    removeItem: (state) => {
      state.items.pop();
    },

    // originalState ={items :["pizza"]}

    clearCart: (state,action) => {
      // RTK - either mutate the existing state or return a new state
      // state.items.length = 0;  // original state=[]

      return {items:[]}; // this new [] will be replaced inside originalState=[]
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
