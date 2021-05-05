import {Dispatch} from "redux";
import {authAPI} from "../api/api-auth";
import {loginAC} from "./login-reducer";

const initialState: ProfileInitialStateType = {
    profile: {
        _id: null,
        email: null,
        name: null,
        avatar: null,
        publicCardPacksCount: null,
        created: null,
        updated: null,
        isAdmin: null,
        verified: null,
        rememberMe: null,
        error: null
    }
}

export const profileReducer = (state: ProfileInitialStateType = initialState, action: ActionType): ProfileInitialStateType => {
    switch(action.type) {
        case "PROFILE-REDUCER/SET_PROFILE": {
            return {
                ...state,
                profile: action.profile
            }
        }
        default:
            return state
    }
}
//AC
export const setProfileAC = (profile: ProfileType) => ({type: "PROFILE-REDUCER/SET_PROFILE", profile} as const)


//thunks
export const authMeTC = () => (dispatch: Dispatch) => {
    return authAPI.me()
        .then(res => {
                dispatch(setProfileAC(res.data))

        })
        .catch(err => {
            const error = err.response
                ? err.response.data.error
                : (err.message + ', more details in the console');
            console.log(error)
        })
}


//types
type ActionType = ReturnType<typeof setProfileAC >
export type ProfileInitialStateType = {
    profile: ProfileType
}
export type ProfileType = {
    _id: string | null
    email: string | null
    name: string | null
    avatar: string | null
    publicCardPacksCount: number | null
    created: string | null
    updated: string | null
    isAdmin: boolean | null
    verified: boolean | null
    rememberMe: boolean | null
    error: string | null
}