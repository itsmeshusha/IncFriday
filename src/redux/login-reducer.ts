import {Dispatch} from "redux"
import {loginAPI, LoginDataType} from "../api/api-login";
import {setStatusAC} from "./app-reducer";

const initState = {
    isLoggedIn: false,
    error: ''
}

export const loginReducer = (state: InitStateType = initState, action: ActionType): InitStateType => {
    switch (action.type) {
        case "LOGIN-REDUCER/LOGIN": {
            return {...state, isLoggedIn: action.isLoggedIn}
        }
        case "LOGIN/SET_ERROR": {
            return {...state, error: action.error}
        }
        default:
            return state
    }
}
//AC
export const loginAC = (isLoggedIn: boolean) => ({type: "LOGIN-REDUCER/LOGIN", isLoggedIn} as const)
export const setLoginErrorAC = (error: string) => ({type: "LOGIN/SET_ERROR", error} as const)

//thunks
export const loginTC = (loginData: LoginDataType) => (dispatch: Dispatch) => {
    dispatch(setStatusAC('loading'))
    loginAPI.login(loginData)
        .then(res => {
            dispatch(loginAC(true))
            dispatch(setStatusAC('succeeded'))
        })
        .catch(err => {
            dispatch(setLoginErrorAC(err.response.data.error + ' more details in the console'))
            console.log('Error:', {...err})
            dispatch(setStatusAC('failed'))
        })
}

export const logoutTC = () => (dispatch: Dispatch) => {
    dispatch(setStatusAC('loading'))
    loginAPI.logout()
        .then(() => {
            dispatch(loginAC(false))
            dispatch(setStatusAC('succeeded'))
        })
        .catch(err => {
            const error = err.response
                ? err.response.data.error
                : (err.message + ', more details in the console');
            console.log(error)
            dispatch(setStatusAC('failed'))
        })
}

//types
type InitStateType = typeof initState
type ActionType = ReturnType<typeof loginAC | typeof setLoginErrorAC>