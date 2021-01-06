import React from 'react'
import {NavLink} from "react-router-dom";

export const Header = () => {
    return <div>
        <div>
            <NavLink to={"/login"}>Log In</NavLink>
        </div>
        <div>
            <NavLink to={"/registration"}>Registration</NavLink>
        </div>
        <div>
            <NavLink to={"/recover-password"}>Recover Password</NavLink>
        </div>
        <div>
            <NavLink to={"/new-password"}>New Password</NavLink>
        </div>
        <div>
            <NavLink to={"/profile"}>Profile</NavLink>
        </div>
        <div>
            <NavLink to={"/test"}>Test</NavLink>
        </div>
    </div>
}