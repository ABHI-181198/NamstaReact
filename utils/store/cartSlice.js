import { createSlice } from "@reduxjs/toolkit";


const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        addCart:(state,action)=>{
            state.items.push(action.payload);
        },
        removeCart:(state)=>{
            state.items.pop();
        },
        clearCart:(state)=>{
            state.items.length=0;
            // why not state.items=[]??
        }
    }
})
// Exporting Named export of All Reducers in Cart Slice!!!
export const {addCart,removeCart,clearCart}=cartSlice.actions;


// Exporting our Slice to connect to our Store!!
export default cartSlice.reducer;