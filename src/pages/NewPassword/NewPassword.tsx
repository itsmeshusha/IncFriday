import React, {ChangeEvent, useState} from 'react'
import SuperInputText from "../../common/SuperInputText/SuperInputText";
import SuperButton from "../../common/SuperButton/SuperButton";
import {Redirect, useParams} from 'react-router-dom';
import {sendNewPasswordTC} from "../../redux/new-password-reducer";
import {useDispatch, useSelector} from "react-redux";
import s from './NewPassword.module.css'
import {AppStoreType} from "../../redux/store";
import {PATH} from "../../Routes";
//@ts-ignore
import Bounce from 'react-reveal/Bounce';

type ParamTypes = {
    token: string
}

export const NewPassword = () => {

    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const {token} = useParams<ParamTypes>()
    const dispatch = useDispatch()
    const status = useSelector<AppStoreType, string>(state => state.newPassword.status)

    const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }

    const onChangeConfirmPassword = (e: ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(e.target.value)
    }

    const setNewPassword = () => {

        if (password === confirmPassword) {
            console.log(token)
            dispatch(sendNewPasswordTC(password, token))
        } else {
            alert("Passwords don't match!")
        }
    }

    if (status === 'succeeded') {
        return <Redirect to={PATH.LOGIN}/>
    }


    return <div className={s.mainBlock}>
        <Bounce left>
            <div className={s.heading}>New Password</div>
        </Bounce>
        <Bounce right>
            <div className={s.form}>
                <div className={s.item}>
                    <span>Enter new password</span>
                    <SuperInputText type={"password"} placeholder={"password"} value={password}
                                    onChange={onChangePassword}/>

                </div>
                <div className={s.item}>
                    <span>Confirm new password</span>
                    <SuperInputText type={"password"} placeholder={"password"} value={confirmPassword}
                                    onChange={onChangeConfirmPassword}/>

                </div>
                <div className={s.item}>
                    <SuperButton onClick={setNewPassword}>Set password</SuperButton>
                </div>
            </div>
        </Bounce>
    </div>

}