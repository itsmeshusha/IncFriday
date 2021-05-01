import {applyMiddleware, createStore} from "redux";
import {combineReducers} from "redux";
import {profileReducer} from "./profile-reducer";
import {registerReducer} from "./register-reducer";
import thunkMiddleware from 'redux-thunk';
import {loginReducer} from "./login-reducer";

const reducers = combineReducers({
    profile: profileReducer,
    register: registerReducer,
    login: loginReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store;
export type AppStoreType = ReturnType<typeof reducers>

//@ts-ignore
window.store = store;