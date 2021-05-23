import {packsAPI, PackType} from "../api/api-packs";
import {Dispatch} from "redux";
import {setStatusAC} from "./app-reducer";
import {setLoginErrorAC} from "./login-reducer";

const initialState: InitStateType = {
    packs: []
}

export const packsReducer = (state = initialState, action: ActionType): InitStateType => {
    switch(action.type) {
        case "PACKS/SET_PACKS": {
            return {...state, packs: action.packs}
        }
    }

    return state
}

//AC
export const setPacksAC = (packs: Array<PackType>) => ({type: "PACKS/SET_PACKS", packs} as const)

//thunks
export const setPacksTC = () => (dispatch: Dispatch) => {
    dispatch(setStatusAC('loading'))
    packsAPI.getPacks()
        .then(res => {
            dispatch(setPacksAC(res.data.cardPacks))
            dispatch(setStatusAC('succeeded'))
        })
        .catch(err => {
            dispatch(setLoginErrorAC(err.response.data.error + ' more details in the console'))
            console.log('Error:', {...err})
            dispatch(setStatusAC('failed'))
        })
}

//types
type ActionType = ReturnType <typeof setPacksAC>
type InitStateType = {
    packs: Array<PackType>
}
