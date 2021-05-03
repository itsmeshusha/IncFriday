import React, {ChangeEvent, useState} from 'react'
import SuperInputText from "../../common/SuperInputText/SuperInputText";
import SuperButton from "../../common/SuperButton/SuperButton";
import {useDispatch} from "react-redux";
import {sendEmailTC} from "../../redux/recover-password-reducer";
import s from './RecoverPassword.module.css'
//@ts-ignore
import Bounce from 'react-reveal/Bounce';

export const RecoverPassword = () => {

    const [email, setEmail] = useState("")
    const dispatch = useDispatch()

    const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

    const sendEmail = () => {
        dispatch(sendEmailTC(email))
    }

    return <div className={s.mainBlock}>
        <Bounce left>
            <div className={s.heading}>Forgot Password?</div>
        </Bounce>
        <Bounce right>
            <div className={s.form}>
                <div className={s.item}>
                    <SuperInputText type={"text"} placeholder={"email"} value={email} onChange={onChangeEmail}/>
                    <SuperButton onClick={sendEmail}>Send email</SuperButton>
                </div>
            </div>
            <p className={s.text}>On your email we'll send a link. Please click it.</p>
        </Bounce>
    </div>
}