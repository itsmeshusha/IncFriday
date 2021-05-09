import React, {ChangeEvent, useState} from 'react'
import SuperInputText from "../../common/SuperInputText/SuperInputText";
import SuperCheckbox from "../../common/SuperCheckbox/SuperCheckbox";
import SuperButton from "../../common/SuperButton/SuperButton";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../redux/store";
import s from './Login.module.css'
import {NavLink, Redirect} from "react-router-dom";
import {PATH} from "../../Routes";
import {loginTC} from "../../redux/login-reducer";
//@ts-ignore
import Bounce from 'react-reveal/Bounce';
import {RequestStatusType} from "../../redux/app-reducer";
import {Loader} from "../../common/Loader/Loader";

export const Login = () => {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [rememberMe, setRememberMe] = useState<boolean>(false)

    const dispatch = useDispatch()
    const isLoggedIn = useSelector<AppStoreType, boolean>(state => state.login.isLoggedIn)
    const error = useSelector<AppStoreType, string>(state => state.login.error)
    const status = useSelector<AppStoreType, RequestStatusType>(state => state.app.status)

    const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

    const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }

    const onChangeRememberMe = (e: ChangeEvent<HTMLInputElement>) => {
        setRememberMe(e.target.checked)
    }

    const loginClickHandler = () => {
        dispatch(loginTC({email, password, rememberMe}))
    }

    if (isLoggedIn) {
        return <Redirect to={PATH.PROFILE}/>
    }

    return <div className={s.mainBlock}>
        {status === 'loading' && <Loader />}
        {error ? error : ""}
        <Bounce left>
            <div className={s.heading}>Log In</div>
        </Bounce>
        <Bounce right>
            <div className={s.form}>
                <div className={s.item}>
                    <SuperInputText type={"text"} placeholder={"email"} value={email} onChange={onChangeEmail}/>
                </div>
                <div className={s.item}>
                    <SuperInputText type={"password"} placeholder={"password"} value={password}
                                    onChange={onChangePassword}/>
                </div>
                <div className={s.item}>
                    <span>Remember me</span>
                    <SuperCheckbox checked={rememberMe} onChange={onChangeRememberMe}/>
                </div>
                <div className={s.item}>
                    <SuperButton onClick={loginClickHandler}>Log In</SuperButton>
                </div>

                <div className={s.item}>
                    <NavLink activeClassName={s.selected} to={PATH.RECOVER_PASSWORD}>Forgot password?</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink activeClassName={s.selected} to={PATH.REGISTRATION}>Don't have profile? Sign up.</NavLink>
                </div>


            </div>
        </Bounce>
    </div>
}