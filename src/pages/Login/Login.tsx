import React from 'react'
import SuperButton from "../../common/c2-SuperButton/SuperButton";
import SuperInputText from "../../common/c1-SuperInputText/SuperInputText";

export const Login = () => {
    return <div className={`login`}>
        <div>Email</div>
        <SuperInputText
            type={`text`}
            placeholder={`email`}
        />
        <div>Password</div>
        <SuperInputText
            type={`text`}
            placeholder={`password`}
        />

        <div>
            <SuperButton>Sign In</SuperButton>
        </div>
    </div>
}