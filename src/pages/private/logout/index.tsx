import React from "react";
import { Navigate } from "react-router-dom";

const Logout = () => {

    const logout = () => {
        // 
    }

    React.useEffect(() => {
        logout()
    }, [])

    return (
        <Navigate to={'/'} />
    )
}

export default Logout;