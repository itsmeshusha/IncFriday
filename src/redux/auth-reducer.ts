import {Dispatch} from "redux";
import {authAPI, registerAPI, RegisterNewUserDataType} from "../api/api-register";

const initState = {
    isAuth: false
}

export const authReducer = (state: InitStateType = initState, action: ActionType) => {
    switch(action.type) {
        case "AUTH-REDUCER/AUTH-LOGIN-USER": {
            return {...state, isAuth: action.isAuth}
        }
        default:
            return state
    }
}

//AC
export const authLoginAC = (isAuth: boolean) =>
    ({type: "AUTH-REDUCER/AUTH-LOGIN-USER", isAuth} as const)
//thunks
export const authLoginTC = (authLogin: RegisterNewUserDataType) => (dispatch: Dispatch) => {
    authAPI.loginUser(authLogin)
        .then(res => {
            debugger
        })
        .catch(err => console.log(err))
}

//types
type InitStateType = typeof initState
type ActionType = ReturnType<typeof authLoginAC>