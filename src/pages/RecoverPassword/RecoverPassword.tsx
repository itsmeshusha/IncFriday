import React, {useState} from 'react'
import SuperInputText from "../../common/c1-SuperInputText/SuperInputText";
import SuperButton from "../../common/c2-SuperButton/SuperButton";

export const RecoverPassword = () => {

    const [email, setEmail] = useState("")


    const sendEmail = () => {
        alert(email)
    }

    return <div>
        <h3>Recover Password</h3>
        <div>
            <SuperInputText type={"text"} placeholder={"email"} value={email} onChangeText={setEmail} />
            <SuperButton onClick={sendEmail}>Send email</SuperButton>
        </div>
        <p>On your email we'll send a link. Please click it.</p>

    </div>
}