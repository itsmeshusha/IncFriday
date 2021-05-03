import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../redux/store";
import {authMeTC} from "../../redux/profile-reducer";

export const Profile = () => {
    const isLoggedIn = useSelector<AppStoreType, boolean>(state => state.login.isLoggedIn)
    const avatar = useSelector<AppStoreType, string | null>(state => state.profile.profile.avatar)
    const id = useSelector<AppStoreType, string | null>(state => state.profile.profile._id)
    const email = useSelector<AppStoreType, string | null>(state => state.profile.profile.email)
    const name = useSelector<AppStoreType, string | null>(state => state.profile.profile.name)
    const dispatch = useDispatch()

    useEffect(() => {
        if (!isLoggedIn) {
            dispatch(authMeTC())
        }

    }, [])

    return <div>
        <div>
            {/*@ts-ignore*/}
            <img src={avatar}/>
        </div>
        <div>
            name: {name}
        </div>
        <div>
            id: {id}
        </div>
        <div>
            email: {email}
        </div>
    </div>
}