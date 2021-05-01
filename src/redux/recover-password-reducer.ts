const initState = {

}

export const recoverPasswordReducer = (state:InitStateType = initState, action: ActionType) => {
    switch(action.type) {
        case "RECOVER-PASSWORD-REDUCER/FORGOT-PASSWORD": {
            return {...state}
        }
        default:
            return state
    }
}

//AC
export const forgotPasswordAC = (email: string) => ({ type: "RECOVER-PASSWORD-REDUCER/FORGOT-PASSWORD", email })



//types
type InitStateType = typeof initState
type ActionType = ReturnType<typeof forgotPasswordAC>