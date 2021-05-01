import axios from 'axios';

export type LoginDataType = {
    email: string
    password: string
    rememberMe: boolean
}

const instance = axios.create({
    baseURL: "http://localhost:7542/2.0/" //сам сервер https://neko-back.herokuapp.com/2.0
})

export const loginAPI = {
    login (data: LoginDataType) {
        return instance.post('auth/login', data)
    }
}