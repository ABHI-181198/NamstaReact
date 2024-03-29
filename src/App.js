import React, { Children } from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter,RouterProvider,Link,Outlet } from "react-router-dom";

//JSX is Returning the React Element which can be render Directly
const AppLayout=()=>{
    return (
    <div className="app">
        <Header/>
        <Outlet/>
    </div>
    )
}
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
                path:"about",
                element:<About/>
            },
            {
                path:"contact",
                element:<Contact/>,
            },
        ],

    }
])

   ReactDOM.render(<RouterProvider router={appRouter}/>,document.getElementById("root"));

