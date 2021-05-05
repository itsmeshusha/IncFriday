import React from 'react';
import s from './Initialize.module.css'


export const Initialize = () => {
    return (
        <div className={s.loader}>
            <div className={`${s.inner} ${s.one}`}></div>
            <div className={`${s.inner} ${s.two}`}></div>
            <div className={`${s.inner} ${s.three}`}></div>
        </div>

    )
}