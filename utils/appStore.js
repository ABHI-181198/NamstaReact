import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./store/cartSlice"

appStore=configureStore({
    reducer:{
        cartData:cartReducer
    },
})

export default appStore;