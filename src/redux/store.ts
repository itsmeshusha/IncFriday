import { createStore } from "redux";
import {combineReducers} from "redux";
import {profileReducer} from "./profile-reducer";

const reducers = combineReducers({
    profile: profileReducer
})
//commit

const store = createStore(reducers)

export default store;
export type AppStoreType = ReturnType<typeof reducers>

//@ts-ignore
window.store = store;