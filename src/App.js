import React, { lazy,Suspense } from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter,RouterProvider,Link,Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import { Provider } from "react-redux";
import appStore from "../utils/appStore"
import Cart from "./components/Cart";
// import Grocery from "./components/Grocery";


const Grocery=lazy(()=>import("./components/Grocery"))
// This Concept is known as Lazy Loading and it create the seperate Js File in the System which is loaded on demand of user.
// This is helping to optimize our Application in the System.
// 


//JSX is Returning the React Element which can be render Directly

const AppLayout=()=>{
    return (
    <Provider store={appStore}>
    <div className="app">
        <Header/>
        <Outlet/>
    </div>
    </Provider>
    )
}

// Routing Configration Setting
const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement:<Error name="Abhishek"  age="25"/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/contact",
                element:<Contact/>,
            },
            {
                path:"/restaurant/:id",
                element:<RestaurantMenu/>,
            },
            {
                path:"/grocery",
                element:<Suspense fallback={<>Loading...</>}><Grocery/></Suspense>

            },
            {
                path:"/cart",
                element:<Cart/>
            }
        ],

    }
])
   // Providing the Routing Configration at Root Level
   ReactDOM.render(<RouterProvider router={appRouter}/>,document.getElementById("root"));

