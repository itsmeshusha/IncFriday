import React, {useState} from 'react'
import SuperInputText from "../../common/SuperInputText/SuperInputText";
import SuperButton from "../../common/SuperButton/SuperButton";

export const NewPassword = () => {

    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const setNewPassword = () => {
        alert(`${password}, ${confirmPassword}`)
    }

    return <div>
        <h3>New Password</h3>
        <SuperInputText type={"password"} placeholder={"password"} value={password} onChangeText={setPassword}/>
        <div>Enter new password</div>

        <SuperInputText type={"password"} placeholder={"password"} value={confirmPassword} onChangeText={setConfirmPassword} />
        <div>Confirm new password</div>

        <SuperButton onClick={setNewPassword}>Set password</SuperButton>

    </div>
}