import React, {ChangeEvent, useState} from 'react'
import SuperInputText from "../../common/SuperInputText/SuperInputText";
import SuperButton from "../../common/SuperButton/SuperButton";
import {useParams} from 'react-router-dom';
import {sendNewPasswordTC} from "../../redux/new-password-reducer";
import {useDispatch} from "react-redux";

type ParamTypes = {
    token: string
}

export const NewPassword = () => {

    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const {token} = useParams<ParamTypes>()
    const dispatch = useDispatch()

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

    return <div>
        <h3>New Password</h3>
        <SuperInputText type={"password"} placeholder={"password"} value={password} onChange={onChangePassword}/>
        <div>Enter new password</div>

        <SuperInputText type={"password"} placeholder={"password"} value={confirmPassword} onChange={onChangeConfirmPassword} />
        <div>Confirm new password</div>

        <SuperButton onClick={setNewPassword}>Set password</SuperButton>

    </div>
}