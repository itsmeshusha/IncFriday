import {Dispatch} from "redux"
import {passwordAPI} from "../api/api-recover-password";

const initState = {
    status: 'idle',
    error: '',
    successMessage: ''
}

export const recoverPasswordReducer = (state: InitStateType = initState, action: ActionType): InitStateType => {
    switch (action.type) {
        case "RECOVER-PASSWORD-REDUCER/SET_ERROR": {
            return {
                ...state,
                status: action.error
            }
        }
        case "RECOVER-PASSWORD-REDUCER/SET_SUCCESS": {
            return {
                ...state,
                status: action.recoverySuccess
            }
        }
        case "RECOVER-PASSWORD-REDUCER/SET_RECOVERY_STATUS": {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state
    }
}

//AC
export const setErrorAC = (error: string) => ({type: 'RECOVER-PASSWORD-REDUCER/SET_ERROR', error} as const)
export const setSuccessAC = (recoverySuccess: string) => ({
    type: 'RECOVER-PASSWORD-REDUCER/SET_SUCCESS',
    recoverySuccess
} as const)
export const setRecoveryStatusAC = (status: RequestStatusType) => ({
    type: 'RECOVER-PASSWORD-REDUCER/SET_RECOVERY_STATUS',
    status
} as const)

//thunks
export const sendEmailTC = (email: string) => (dispatch: Dispatch) => {
    dispatch(setRecoveryStatusAC('loading'))
    return passwordAPI.recover(email)
        .then(res => {
            if (res.status === 200) {
                dispatch(setSuccessAC(res.data.info))
            }
        })
        .catch(err => {
            const error = err.response
                ? err.response.data.error
                : (err.message + ', more details in the console')
            dispatch(setErrorAC(error))
        })
        .finally(() => {
            dispatch(setRecoveryStatusAC('succeeded'))
        })

}

//types
export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'
type InitStateType = typeof initState
type ActionType = ReturnType<typeof setErrorAC | typeof setSuccessAC | typeof setRecoveryStatusAC>