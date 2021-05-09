import React from 'react';
import s from './Initialize.module.css'


export const Initialize = () => {
    return (
        <div className={s.loaderWrapper}>
            <div className={s.loader}></div>
        </div>

    )
}