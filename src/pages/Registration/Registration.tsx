import React, {useState} from 'react'
import SuperInputText from "../../common/SuperInputText/SuperInputText";
import SuperButton from "../../common/SuperButton/SuperButton";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../redux/store";
import {registerNewUserTC} from "../../redux/register-reducer";
import {Redirect} from 'react-router-dom';
import {PATH} from "../../Routes";
import s from "./Registration.module.css"

export const Registration = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const dispatch = useDispatch()
    const isRegistered = useSelector<AppStoreType, boolean>(state => state.register.isRegistered)

    const addNewUser = () => {
        if (password === confirmPassword) {
            dispatch(registerNewUserTC({email, password}))
            setEmail("")
            setPassword("")
            setConfirmPassword("")
        } else {
            alert("Passwords don't match!")
        }
    }

    if (isRegistered) {
        return <Redirect to={PATH.LOGIN}/>
    }

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
                <div>Confirm password</div>
                <SuperInputText type={"password"} placeholder={"confirm password"} value={confirmPassword}
                                onChangeText={setConfirmPassword}/>

            </div>

            <div className={s.item}>
                <SuperButton onClick={addNewUser}>Register</SuperButton>
            </div>
        </div>
    </div>
}