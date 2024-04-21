import {useState} from "react";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";


const RestaurantMenu=()=>{
    const[restroName,setRestroName]=useState("");
    //getting all info from Custom hook
    const menuList=useRestaurantMenu(setRestroName);
     console.log("Custom Hook",menuList);
return(
    <>
    {restroName===""?<Shimmer/>:(
    <div>
        <h3>Restaurant Name:{restroName}</h3>
        {menuList.map((items)=><li>
            key={items.id}{items?.name}-| Price Rs{items?.price/100||items?.defaultPrice/100}/- Only</li>)}
    </div>
    )}
    </>
)    
}
export default RestaurantMenu;