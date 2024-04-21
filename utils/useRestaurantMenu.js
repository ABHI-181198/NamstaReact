import React from "react"
import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";

const useRestaurantMenu=(setRestroName)=>{
     const[menuList,setMenuList]=useState([]);
    const parms=useParams();
    const{id}=parms;
    console.log("You are In Custom Hook");
    
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
        key=item?.card.info?.id
        console.log("Item=>",item?.card?.info);
        return item?.card?.info;
    })
      setMenuList(list);
     
}
return  menuList;;
}

export default useRestaurantMenu;