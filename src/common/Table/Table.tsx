import React from 'react'
import s from './Table.module.css'
import SuperButton from "../SuperButton/SuperButton";
import {PackType} from "../../api/api-packs";
import {TableItem} from "./TableItem/TableItem";

type PropsType = {
    packs: Array<PackType>
}

export const Table = (props: PropsType) => {

    return (
        <div className={s.mainBlock}>
            <div className={s.table}>
                <div className={s.item}>Name</div>
                <div className={s.item}>cardsCount</div>
                <div className={s.item}>updated</div>
                <div>
                    <SuperButton>Add pack</SuperButton>
                </div>
            </div>
            <div>
                {props.packs.map(p => <TableItem pack={p}/>)}
            </div>
        </div>
    )
}