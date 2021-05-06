import axios from 'axios';


const instance = axios.create({
    baseURL: "https://neko-back.herokuapp.com/2.0",
    withCredentials: true
})

export const passwordAPI = {
    recover(email: string) {
        return instance.post("/auth/forgot", {
            email,
            from: "alexbushueva27@gmail.com",
            message: `<div style="background-color: #ffb7d5; padding: 15px border-radius: 20px">
                    password recovery link: 
                        <a href='https://itsmeshusha.github.io/IncFriday/#/new-password/$token$'>link</a>
                    </div>
                    `
        })
    },
    newPassword(newPassword: string, token: string | undefined) {
        return instance.post('/auth/set-new-password',
            {
                password: newPassword,
                resetPasswordToken: token
            })

    }
}