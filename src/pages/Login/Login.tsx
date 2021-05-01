import React, {useState} from 'react'
import SuperInputText from "../../common/SuperInputText/SuperInputText";
import SuperCheckbox from "../../common/SuperCheckbox/SuperCheckbox";
import SuperButton from "../../common/SuperButton/SuperButton";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../redux/store";

export const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [rememberMe, setRememberMe] = useState(false)

    const dispatch = useDispatch()
    const isLoggedIn = useSelector<AppStoreType, boolean>(state => state.login.isLoggedIn)

    return <div>
        <div>Log In</div>
        <SuperInputText type={"text"} placeholder={"email"} value={email} onChangeText={setEmail}/>
        <div>Enter email</div>

        <SuperInputText type={"password"} placeholder={"password"} value={password} onChangeText={setPassword}/>
        <div>Enter password</div>

        <SuperCheckbox checked={rememberMe} onChangeChecked={setRememberMe}/>
        <span>Remember me</span>
        <div>
            <SuperButton>Log In</SuperButton>
        </div>

    </div>
}