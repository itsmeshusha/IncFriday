import React from 'react';
import s from './Error.module.css';

export const Error = () => {
    return <div className={s.textContainer}>

        <div className={s.text}>
            Error 404: page don't found :(
        </div>
    </div>
}

