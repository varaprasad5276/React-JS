import { useSelector,useDispatch } from "react-redux";
import json from "../practice.json"
import { useState } from "react";
import ItemList from "./ItemList";
import {clearCart} from "../Utilities/Redux/cartSlice"
const Cart=()=>{
    // console.log(json);
//     console.log(json.tables.guests.columns.length);
//     console.log(Object.keys(json.tables.guests.columns).length);
//  let cols=Object.keys(json.tables.guests.columns);

// subscribing to the store using a Selector 
const cartItems=useSelector((store)=>store.cart.items);
  //  console.log(cartItems);
   
   const dispatch=useDispatch();
 const handleClearCart=()=>{
 dispatch(clearCart())
 }
 
  return (
    <div className="text-center m-2 p-2">
   <h1 className="font-bold ">Cart</h1>
<button className="bg-black text-white rounded-lg m-2 p-2" onClick={handleClearCart}>Clear</button>
    <div className="w-6/12 m-auto ">
      {cartItems.length ===0 && <h1>Your Cart is empty . Add somthing to your Cart.</h1>}
    <ItemList items={cartItems} className="m-2 p-2"/>
    </div>
    </div>
  );

// )

}

export default Cart;
