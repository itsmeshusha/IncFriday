import React from 'react';
import s from './Error.module.css';
import err404 from '../../assets/images/404-Error.jpg'

export const Error = () => {

    return <div className={s.textContainer}>
        <div className={s.img} >
            <img src={err404} />
        </div>
            <div className={s.text}>
                Error 404: page donut found :(
            </div>

    </div>
}

