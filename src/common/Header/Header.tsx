import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "../../Routes";
import s from "./Header.module.css"
import {Logout} from "../../pages/Logout/Logout";
import {useSelector} from "react-redux";
import {AppStoreType} from "../../redux/store";


export const Header = () => {
    const isLoggedIn = useSelector<AppStoreType, boolean>(state => state.login.isLoggedIn)

    return <div className={s.header}>
        {isLoggedIn ? <></> :
            <span className={s.item}>
                <NavLink activeClassName={s.selected} to={PATH.LOGIN}>Log In</NavLink>
            </span>}
        <span className={s.item}>
            <NavLink activeClassName={s.selected} to={PATH.REGISTRATION}>Registration</NavLink>
        </span>
        <span className={s.item}>
            <NavLink activeClassName={s.selected} to={PATH.PROFILE}>Profile</NavLink>
        </span>
        <span>
            <Logout/>
        </span>
    </div>
}