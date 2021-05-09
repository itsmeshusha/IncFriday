import {Dispatch} from "redux";
import {passwordAPI} from "../api/api-recover-password";
import {setStatusAC} from "./app-reducer";

const initState = {
    status: 'idle',
    error: '',
    successMessage: ''
}

export const newPasswordReducer = (state: InitStateType = initState, action: ActionType): InitStateType => {
    switch (action.type) {
        case 'NEW-PASSWORD-REDUCER/SET_ERROR':
            return {
                ...state,
                error: action.error
            }
        case 'NEW-PASSWORD-REDUCER/SET_SUCCESS':
            return {
                ...state,
                successMessage: action.success
            }
        default:
            return state
    }
}

// actions
export const setErrorAC = (error: string) => ({type: 'NEW-PASSWORD-REDUCER/SET_ERROR', error} as const)
export const setSuccessAC = (success: string) => ({type: 'NEW-PASSWORD-REDUCER/SET_SUCCESS', success} as const)

//thunks
export const sendNewPasswordTC = (newPassword: string, token: string) => (dispatch: Dispatch) => {
    dispatch(setStatusAC('loading'))
    passwordAPI.newPassword(newPassword, token)
        .then(res => {
            dispatch(setSuccessAC(res.data.message))
            dispatch(setStatusAC('succeeded'))
        })
        .catch(err => {
            const error = err.response
                ? err.response.data.error
                : (err.message + ', more details in the console')
            dispatch(setErrorAC(error))
        })
        .finally(() => {
            dispatch(setStatusAC('succeeded'))
        })
}

//types
type InitStateType = typeof initState
type ActionType = ReturnType<typeof setErrorAC | typeof setSuccessAC>