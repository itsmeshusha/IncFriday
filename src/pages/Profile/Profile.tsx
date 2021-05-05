import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../redux/store";
import {authMeTC, ProfileType} from "../../redux/profile-reducer";
import user from "../../assets/images/user.png"
import {Redirect} from 'react-router-dom';
import {PATH} from "../../Routes";

export const Profile = () => {
    const isLoggedIn = useSelector<AppStoreType, boolean>(state => state.login.isLoggedIn)
    const profile = useSelector<AppStoreType, ProfileType>(state => state.profile.profile)

    const dispatch = useDispatch()

    useEffect(() => {
        if (!isLoggedIn) {
            dispatch(authMeTC())
        }
    }, [])

    if (!isLoggedIn) {
        return <Redirect to={PATH.LOGIN}/>
    }

    return <div>
        <div>
            <img src={profile.avatar ? profile.avatar : user} alt='userPhoto'/>
        </div>
        <div>
            name: {profile.name}
        </div>
        <div>
            id: {profile._id}
        </div>
        <div>
            email: {profile.email}
        </div>
    </div>
}