import React from 'react'
import SuperButton from "../../SuperButton/SuperButton";
import {PackType} from "../../../api/api-packs";
import s from './TableItem.module.css'

type PropsType = {
    pack?: PackType
}

export const TableItem = (props: PropsType) => {

    return (
        <div className={s.mainBlock}>
            <div className={s.item}>{props.pack?.name}</div>
            <div className={s.item}>{props.pack?.cardsCount}</div>
            <div className={s.item}>{props.pack?.updated}</div>
            <div>
                <SuperButton>Delete</SuperButton>
                <SuperButton>Update</SuperButton>
            </div>
        </div>
    )
}