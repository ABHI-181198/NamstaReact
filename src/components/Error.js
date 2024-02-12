import React from "react";
import {useRouteError} from "react-router-dom";

function Error(props){
    console.log("Prorps In Error",props,props?.name,+props?.age);
    const routerError=useRouteError();
    console.log("Router Error Here!",routerError);
    return (
        <div>
            <h1>Error!!</h1>
            <p>{routerError.data}</p>
            <p>Status:{routerError.status}</p>
        </div>
    )
}
export default Error;