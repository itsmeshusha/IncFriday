import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Routes";


export const Header = () => {
    return <div className={"header"}>
        <span className={"item"}>
            <NavLink to={PATH.LOGIN}>Log In</NavLink>
        </span>
        <span className={"item"}>
            <NavLink to={PATH.REGISTRATION}>Registration</NavLink>
        </span>
        <span className={"item"}>
            <NavLink to={PATH.RECOVER_PASSWORD}>Recover Password</NavLink>
        </span>
        <span className={"item"}>
            <NavLink to={PATH.NEW_PASSWORD}>New Password</NavLink>
        </span>
        <span className={"item"}>
            <NavLink to={PATH.PROFILE}>Profile</NavLink>
        </span>
        <span className={"item"}>
            <NavLink to={PATH.TEST}>Test</NavLink>
        </span>
    </div>
}