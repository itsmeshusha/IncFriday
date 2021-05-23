import React from 'react'
import {Redirect, Route, Switch } from 'react-router-dom'
import {Error} from './pages/404/Error';
import {Login} from "./pages/Login/Login";
import {NewPassword} from "./pages/NewPassword/NewPassword";
import {Profile} from "./pages/Profile/Profile";
import {RecoverPassword} from "./pages/RecoverPassword/RecoverPassword";
import {Registration} from "./pages/Registration/Registration";
import {Test} from "./pages/Test/Test";
import {Packs} from "./pages/Packs/Packs";


export const PATH = {
    LOGIN: "/login",
    NEW_PASSWORD: "/new-password/:token?",
    PROFILE: "/profile",
    RECOVER_PASSWORD: "/recover-password",
    REGISTRATION: "/registration",
    TEST: "/test",
    PACKS: "/packs",
}

//Routes

export const Routes = () => {
    return <div>
        <Switch>
            <Route exact path={"/"} render={() => <Redirect to={PATH.PROFILE} />} />
            <Route path={PATH.LOGIN} render={() => <Login />} />
            <Route path={PATH.NEW_PASSWORD} render={() => <NewPassword />} />
            <Route path={PATH.PROFILE} render={() => <Profile />} />
            <Route path={PATH.RECOVER_PASSWORD} render={() => <RecoverPassword />} />
            <Route path={PATH.REGISTRATION} render={() => <Registration />} />
            <Route path={PATH.TEST} render={() => <Test />} />
            <Route path={PATH.PACKS} render={() => <Packs />} />

            <Route render={() => <Error />} />
        </Switch>
    </div>
}