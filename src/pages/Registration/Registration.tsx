import React, {useState} from 'react'
import SuperInputText from "../../common/c1-SuperInputText/SuperInputText";
import SuperButton from "../../common/c2-SuperButton/SuperButton";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../redux/store";
import {registerNewUserTC} from "../../redux/register-reducer";
import { Redirect } from 'react-router-dom';
import {PATH} from "../../Routes";

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

    return <div>
        <SuperInputText
            type={"text"}
            placeholder={"email"}
            value={email}
            onChangeText={setEmail}/>

            <div>Enter email</div>

        <SuperInputText type={"password"}
                        placeholder={"password"}
                        value={password}
                        onChangeText={setPassword}/>

                        <div>Enter password</div>

        <SuperInputText type={"password"}
                        placeholder={"confirm password"} value={confirmPassword}
                        onChangeText={setConfirmPassword}/>

                        <div>Confirm password</div>

        <SuperButton
            onClick={addNewUser}>Register</SuperButton>
    </div>
}