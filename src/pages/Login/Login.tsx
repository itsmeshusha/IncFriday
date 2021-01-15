import React, {useState} from 'react'
import SuperButton from "../../common/c2-SuperButton/SuperButton";
import SuperInputText from "../../common/c1-SuperInputText/SuperInputText";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../redux/store";
import {authLoginTC} from "../../redux/auth-reducer";

export const Login = () => {
    const [email, setEmail] = useState(``)
    const [password, setPassword] = useState(``)

    const dispatch = useDispatch();
    const isAuth = useSelector<AppStoreType,
        boolean>(state =>
        state.auth.isAuth)

    const setUserAuth = () => {
        dispatch(authLoginTC({email,password}))


    }
    console.log(email)
    console.log(password)

    return <div className={`login`}>
        <div>Email</div>
        <SuperInputText
            type={`text`}
            placeholder={`email`}
            value={email}
            onChangeText={setEmail}/>
        <div>Password</div>
        <SuperInputText
            type={`text`}
            placeholder={`password`}
            value={password}
            onChangeText={setPassword}/>

        <div>
            <SuperButton onClick={setUserAuth}>Sign In</SuperButton>
        </div>
    </div>
}