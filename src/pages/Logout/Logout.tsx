import React from 'react';
import s from './Logout.module.css'
import {logoutTC} from "../../redux/login-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../redux/store";
import {Loader} from "../../common/Loader/Loader";
import {RequestStatusType} from "../../redux/app-reducer";

export const Logout = () => {
    const isLoggedIn = useSelector<AppStoreType, boolean>(state => state.login.isLoggedIn)
    const status = useSelector<AppStoreType, RequestStatusType>(state => state.app.status)

    const dispatch = useDispatch()

    const logout = () => {
        dispatch(logoutTC())
    }
    return <div>
        {status === 'loading' && <Loader />}
        {isLoggedIn && <button className={s.btn} onClick={logout}>Log Out</button>}
    </div>
}