import axios from 'axios';


const instance = axios.create({
    //baseURL: "https://neko-back.herokuapp.com/2.0/", //сам сервер
    baseURL: "http://localhost:7542/2.0/", //сам сервер
    withCredentials: true
})

export const authAPI = {
    me () {
        return instance.post('auth/me')
    },
    updateMe (name: string | null, avatar: string | null) {
        return instance.put('auth/me', {
            name,
            avatar
        })
    }
}