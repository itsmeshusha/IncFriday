import axios from 'axios';


const instance = axios.create({
    baseURL: "https://neko-back.herokuapp.com/2.0"
})

export const passwordAPI = {
    recover(email: string) {
        return instance.post("/auth/forgot", {
            email,
            from: "test-front-admin <ai73a@yandex.by>",
            message: `<div style="background-color: lime; padding: 15px">
                    password recovery link: 
                        <a href='http://localhost:3000/#/new-password/$token$'>link</a>
                    </div>
                    `
        })
    },
    newPassword() {

    }
}