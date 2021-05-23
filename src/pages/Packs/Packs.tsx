import React from 'react'
import {Table} from "../../common/Table/Table";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../redux/store";
import {PackType} from "../../api/api-packs";
import {setPacksTC} from "../../redux/packs-reducer";
import SuperButton from "../../common/SuperButton/SuperButton";
import s from "../Login/Login.module.css";

export const Packs = () => {


    const isLoggedIn = useSelector<AppStoreType, boolean>(state => state.login.isLoggedIn)
    const packs = useSelector<AppStoreType, Array<PackType>>(state => state.packs.packs )
    const dispatch = useDispatch()


    const getAllPacks = () => {
        dispatch(setPacksTC())
    }

    return <div>
        <div className={s.heading}>Packs</div>
        <SuperButton onClick={getAllPacks}>All packs</SuperButton>
        <Table packs={packs}/>
    </div>
}