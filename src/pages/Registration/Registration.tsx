import React, {ChangeEvent, useState} from 'react'
import SuperInputText from "../../common/SuperInputText/SuperInputText";
import SuperButton from "../../common/SuperButton/SuperButton";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../redux/store";
import {registerNewUserTC} from "../../redux/register-reducer";
import {Redirect} from 'react-router-dom';
import {PATH} from "../../Routes";
import s from "./Registration.module.css"
//@ts-ignore
import Bounce from 'react-reveal/Bounce';
import {RequestStatusType} from "../../redux/app-reducer";
import {Loader} from "../../common/Loader/Loader";

export const Registration = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const dispatch = useDispatch()
    const isRegistered = useSelector<AppStoreType, boolean>(state => state.register.isRegistered)
    const status = useSelector<AppStoreType, RequestStatusType>(state => state.app.status)

    const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

    const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }

    const onChangeConfirmPassword = (e: ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(e.target.value)
    }

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
        {status === 'loading' && <Loader />}
        <Bounce left>
            <div className={s.heading}>Registration</div>
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
                    <SuperInputText type={"password"} placeholder={"confirm password"} value={confirmPassword}
                                    onChange={onChangeConfirmPassword}/>

                </div>

                <div className={s.item}>
                    <SuperButton onClick={addNewUser}>Register</SuperButton>
                </div>
            </div>
        </Bounce>
    </div>
}