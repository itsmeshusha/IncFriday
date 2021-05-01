import React, {useState} from 'react'
import SuperInputText from "../../common/SuperInputText/SuperInputText";
import SuperCheckbox from "../../common/SuperCheckbox/SuperCheckbox";
import SuperButton from "../../common/SuperButton/SuperButton";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../redux/store";
import s from './Login.module.css'

export const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [rememberMe, setRememberMe] = useState(false)

    const dispatch = useDispatch()
    const isLoggedIn = useSelector<AppStoreType, boolean>(state => state.login.isLoggedIn)

    return <div className={s.mainBlock}>
        <div className={s.form}>
            <div className={s.item}>
                <div>Enter email</div>
                <SuperInputText type={"text"} placeholder={"email"} value={email} onChangeText={setEmail}/>
            </div>
            <div className={s.item}>
                <div>Enter password</div>
                <SuperInputText type={"password"} placeholder={"password"} value={password} onChangeText={setPassword}/>
            </div>
            <div className={s.item}>
                <span>Remember me</span>
                <SuperCheckbox checked={rememberMe} onChangeChecked={setRememberMe}/>
            </div>
            <div className={s.item}>
                <SuperButton>Log In</SuperButton>
            </div>
        </div>
    </div>
}