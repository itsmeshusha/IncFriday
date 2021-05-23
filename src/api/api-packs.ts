import axios from 'axios';

const instance = axios.create({
    baseURL: "https://neko-back.herokuapp.com/2.0/",
    // baseURL: "http://localhost:7542/2.0/", //сам сервер https://neko-back.herokuapp.com/2.0
    withCredentials: true
})

export const packsAPI = {
    getPacks () {
        return instance.get<GetPacksResponseType>('cards/pack')
    }
}

//types

export type PackType = {
    _id: string
    user_id: string
    name: string
    path: string
    cardsCount: number
    grade: number
    shots: number
    rating: number
    type: string
    created: string
    updated: string
    __v: number
}

type GetPacksResponseType = {
    cardPacks: Array<PackType>
    cardPacksTotalCount: number
    maxCardsCount: number
    minCardsCount: number
    page: number
    pageCount: number
}