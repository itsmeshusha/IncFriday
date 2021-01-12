type InitStateType = {

}
type ActionType = {
    type: string
}

const initState: InitStateType = {

}

export const profileReducer = (state = initState, action: ActionType) => {
    switch(action.type) {
        case "": {
            return state
        }
        default:
            return state
    }
}