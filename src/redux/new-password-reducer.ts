import {Dispatch} from "redux";
import {passwordAPI} from "../api/api-recover-password";

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
        case 'NEW-PASSWORD-REDUCER/SET_STATUS':
            return {
                ...state,
                status: action.status
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
export const setAppStatusAC = (status: RequestStatusType) => ({type: 'NEW-PASSWORD-REDUCER/SET_STATUS',status} as const)

//thunks
export const sendNewPasswordTC = (newPassword: string, token: string) => (dispatch: Dispatch) => {
    dispatch(setAppStatusAC('loading'))
    passwordAPI.newPassword(newPassword, token)
        .then(res => {
            dispatch(setSuccessAC(res.data.message))
        })
        .catch(err => {
            const error = err.response
                ? err.response.data.error
                : (err.message + ', more details in the console')
            dispatch(setErrorAC(error))
        })
        .finally(() => {
            dispatch(setAppStatusAC('succeeded'))
        })
}

//types
export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'
type InitStateType = typeof initState
type ActionType = ReturnType<typeof setErrorAC | typeof setSuccessAC | typeof setAppStatusAC>