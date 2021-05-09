import React, {useEffect} from 'react';
import s from './Profile.module.css';
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../redux/store";
import {authMeTC, ProfileType} from "../../redux/profile-reducer";
import user from "../../assets/images/user.png";
import {Redirect} from 'react-router-dom';
import {PATH} from "../../Routes";
import SuperButton from "../../common/SuperButton/SuperButton";
import {logoutTC} from "../../redux/login-reducer";

export const Profile = () => {
    const isLoggedIn = useSelector<AppStoreType, boolean>(state => state.login.isLoggedIn)
    const profile = useSelector<AppStoreType, ProfileType>(state => state.profile.profile)

    const dispatch = useDispatch()
    useEffect(() => {
        if (isLoggedIn) {
            dispatch(authMeTC())
        }
    }, [isLoggedIn, dispatch])

    if(!isLoggedIn) {
        return <Redirect to={PATH.LOGIN} />
    }

    return <div className={s.mainBlock}>
        <div className={s.profile}>
            <div className={s.profileImage}>
                <img src={profile.avatar ? profile.avatar : user} alt='userPhoto'/>
            </div>
            <div className={s.item}>
                id: {profile._id}
            </div>
            <div className={s.item}>
                email: {profile.email}
            </div>
        </div>
    </div>
}