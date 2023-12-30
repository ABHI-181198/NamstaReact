import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import RestaurantCard from "./components/RestaurantCard";

//JSX is Returning the React Element which can be render Directly









const AppLayout=()=>{
    return (
    <div className="app">
        <Header/>
        <Body/>
    </div>
    )
}

   ReactDOM.render(<AppLayout/>,document.getElementById("root"));

