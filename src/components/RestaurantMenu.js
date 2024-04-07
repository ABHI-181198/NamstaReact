import {useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";


const RestaurantMenu=()=>{
    const[restroName,setRestroName]=useState("");
    const[menuList,setMenuList]=useState([]);
    const parms=useParams();
    console.log("Route",parms);
    const{id}=parms;

    useEffect(()=>{
        fetchMenu();
    },[])
const fetchMenu=async()=>{
    const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.224272&lng=73.1484649&restaurantId="+id+"&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER")
    const json=await data.json();
    const restro=json.data?.cards[0]?.card.card?.text
    const itemList=json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards;
    setRestroName(restro);
    console.log("RestaurantMenu",restro,itemList);
    const list=itemList.map((item)=>{
        console.log("Item=>",item?.card?.info);
        return item?.card?.info;
    })
     setMenuList(list);
}
return(
    <>
    {restroName===""?<Shimmer/>:(
    <div>
        <h3>Restaurant Name:{restroName}</h3>
        {menuList.map((items)=><li>{items?.name}-| Price Rs{items?.price/100||items?.defaultPrice/100}/- Only</li>)}
    </div>
    )}
    </>
)    
}
export default RestaurantMenu;