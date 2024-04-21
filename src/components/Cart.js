import React from "react";
import {useSelector,useDispatch} from "react-redux";
import { addCart } from "../../utils/store/cartSlice";


const Cart=()=>{
    const dispatch=useDispatch();
    const cartItemsStore=useSelector((state)=>state.cartData.items)
    console.log("Items",cartItemsStore);

    const handleAddCart=()=>{
        console.log("Add Cart FUN Called!!");
        dispatch(addCart("KFC"));
    }
    return(
        <>
        <h3>Cart Details:</h3>
        <button onClick={()=>handleAddCart(10)}>Add Cart+</button>
        </>
    )
}

export default Cart;