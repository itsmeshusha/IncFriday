import {Dispatch} from "redux";
import {registerAPI, RegisterNewUserDataType} from "../api/api-register";

const initState = {
    isRegistered: false
}

export const registerReducer = (state: InitStateType = initState, action: ActionType): InitStateType => {
    switch(action.type) {
        case "REGISTER-REDUCER/REGISTER-NEW-USER": {
            return {...state, isRegistered: action.isRegistered}
        }
        default:
            return state
    }
}

//AC
export const registerNewUserAC = (isRegistered: boolean) => ({type: "REGISTER-REDUCER/REGISTER-NEW-USER", isRegistered} as const)

//thunks
export const registerNewUserTC = (newUserData: RegisterNewUserDataType) => (dispatch: Dispatch) => {
    registerAPI.registerNewUser(newUserData)
        .then(res => {
            if(res.status === 201){
                dispatch(registerNewUserAC(true))
            } else {
                dispatch(registerNewUserAC(false))
                alert(res.status)
            }
        })
        .catch(err => console.log(err))
}


//types
type InitStateType = typeof initState
type ActionType = ReturnType<typeof registerNewUserAC>