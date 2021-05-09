import {applyMiddleware, createStore} from "redux";
import {combineReducers} from "redux";
import {profileReducer} from "./profile-reducer";
import {registerReducer} from "./register-reducer";
import thunkMiddleware from 'redux-thunk';
import {loginReducer} from "./login-reducer";
import {recoverPasswordReducer} from "./recover-password-reducer";
import {newPasswordReducer} from "./new-password-reducer";
import {appReducer} from "./app-reducer";

const reducers = combineReducers({
    app: appReducer,
    profile: profileReducer,
    register: registerReducer,
    login: loginReducer,
    recoverPassword: recoverPasswordReducer,
    newPassword: newPasswordReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store;
export type AppStoreType = ReturnType<typeof reducers>

//@ts-ignore
window.store = store;