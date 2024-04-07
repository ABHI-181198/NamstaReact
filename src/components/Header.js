import { LOGO_URL } from "../../utils/constants";
import{Link} from "react-router-dom";
import { useState,useEffect } from "react";
const Header=()=>{
    const[btnLogin,setBtnLogin]=useState("Login");
    loginButton=()=>{
        // console.log("Button",btnLogin)
        setBtnLogin(btnLogin==="Login"?"Logout":"Login");
    }
    console.log("Body");
    useEffect(()=>{
        // useEffect()=>if no dependency Array useEffect is called each render of Component
        console.log("Inside useEffect with No Dependency Array")
    })
    useEffect(()=>{
        // useEffect()=>if Empty dependency Array useEffect is Called only for the first time Component Rendered
        console.log("useEffect With Empty Dependency Array Here!");
    },[])

    // useEffect()=> With Conditional Dependency Array useEffect get render each time condition changes
    useEffect(()=>{
        console.log("useEffect with Dependency Array condition")
    },[btnLogin])
    return(
        <div className="header">
            <div className="logo-container">
                <img  className="logo"  
                 src={LOGO_URL}></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        {
                            // way to give routing path for Specific Component
                        }
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                         <Link to="/about">About Us</Link>
                    </li>
                    <li>
                          <Link to="contact">Contact</Link>
                    </li>
                    <li>Cart</li>
                    <li>
                        <button onClick=
                        {loginButton}>
                            {btnLogin}
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Header;


// Importent Notes about useState
// Never create useState hook inside the if condition or inside any function of your Component
// It's Always Prefered  To create useState Variables inside Always Start of your Component.
//Whenever state Variable update ,react trigger the reconcilation cycle(re-render the Component);
