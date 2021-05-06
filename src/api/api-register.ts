import axios from 'axios';

export type RegisterNewUserDataType = {
    email: string
    password: string
}

const instance = axios.create({
    // baseURL: "http://localhost:7542/2.0", //сам сервер https://neko-back.herokuapp.com/2.0
    baseURL: "https://neko-back.herokuapp.com/2.0", //сам сервер https://neko-back.herokuapp.com/2.0
    withCredentials: true
})

export const registerAPI = {
    registerNewUser(data: RegisterNewUserDataType) {
        return instance.post("/auth/register", data)
    }
}