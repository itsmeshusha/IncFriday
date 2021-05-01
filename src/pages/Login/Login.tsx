import React, {ChangeEvent, useState} from 'react'
import SuperInputText from "../../common/SuperInputText/SuperInputText";
import SuperCheckbox from "../../common/SuperCheckbox/SuperCheckbox";
import SuperButton from "../../common/SuperButton/SuperButton";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../redux/store";
import s from './Login.module.css'
import {Redirect} from "react-router-dom";
import {PATH} from "../../Routes";
import {loginTC} from "../../redux/login-reducer";

export const Login = () => {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [rememberMe, setRememberMe] = useState<boolean>(false)

    const dispatch = useDispatch()
    const isLoggedIn = useSelector<AppStoreType, boolean>(state => state.login.isLoggedIn)
    const error = useSelector<AppStoreType, string>(state => state.login.error)

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
        {error ? error : ""}
        <div className={s.form}>
            <div className={s.item}>
                <div>Enter email</div>
                <SuperInputText type={"text"} placeholder={"email"} value={email} onChange={onChangeEmail}/>
            </div>
            <div className={s.item}>
                <div>Enter password</div>
                <SuperInputText type={"password"} placeholder={"password"} value={password} onChange={onChangePassword}/>
            </div>
            <div className={s.item}>
                <span>Remember me</span>
                <SuperCheckbox checked={rememberMe} onChange={onChangeRememberMe}/>
            </div>
            <div className={s.item}>
                <SuperButton onClick={loginClickHandler}>Log In</SuperButton>
            </div>
        </div>
    </div>
}