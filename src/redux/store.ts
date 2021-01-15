import {applyMiddleware, createStore} from "redux";
import {combineReducers} from "redux";
import {profileReducer} from "./profile-reducer";
import {registerReducer} from "./register-reducer";
import thunkMiddleware from 'redux-thunk';
import {authReducer} from "./auth-reducer";

const reducers = combineReducers({
    profile: profileReducer,
    register: registerReducer,
    auth: authReducer
})
//commit

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store;
export type AppStoreType = ReturnType<typeof reducers>

//@ts-ignore
window.store = store;