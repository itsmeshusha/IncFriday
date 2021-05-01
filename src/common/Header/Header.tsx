import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "../../Routes";
import s from "./Header.module.css"


export const Header = () => {
    return <div className={s.header}>
        <span className={s.item}>
            <NavLink activeClassName={s.selected} to={PATH.LOGIN}>Log In</NavLink>
        </span>
        <span className={s.item}>
            <NavLink activeClassName={s.selected} to={PATH.REGISTRATION}>Registration</NavLink>
        </span>
        {/*<span className={s.item}>*/}
        {/*    <NavLink activeClassName={s.selected} to={PATH.RECOVER_PASSWORD}>Recover Password</NavLink>*/}
        {/*</span>*/}
        {/*<span className={s.item}>*/}
        {/*    <NavLink activeClassName={s.selected} to={PATH.NEW_PASSWORD}>New Password</NavLink>*/}
        {/*</span>*/}
        <span className={s.item}>
            <NavLink activeClassName={s.selected} to={PATH.PROFILE}>Profile</NavLink>
        </span>
    </div>
}