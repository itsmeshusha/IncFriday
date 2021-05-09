import React from 'react';
import s from './Logout.module.css'
import {logoutTC} from "../../redux/login-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../redux/store";

export const Logout = () => {
    const isLoggedIn = useSelector<AppStoreType, boolean>(state => state.login.isLoggedIn)

    const dispatch = useDispatch()

    const logout = () => {
        dispatch(logoutTC())
    }
    return <div>
        {isLoggedIn && <button className={s.btn} onClick={logout}>Log Out</button>}
    </div>
}