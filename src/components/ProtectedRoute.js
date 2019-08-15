import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { navigate  } from "@reach/router";

function ProtectedRoute({component:Component, allowed, authenticatedOnly, path, ...rest}){
    console.log(Component);
    const { user } = useContext(AuthContext);

    if(user.isAuthenticated !== authenticatedOnly){
        user.isAuthenticated ?  window.history.back() : navigate('/app') ;
    }

    if(allowed.includes("all") || allowed.includes(user.role)){
        return <Component {...rest} />
    } else {
        alert('You don\'t have access to that resource');
        window.history.back()
        return null;
    }
}

export default ProtectedRoute;
