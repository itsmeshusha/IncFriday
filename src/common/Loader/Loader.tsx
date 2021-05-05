import React from 'react'
// import s from './Loader.css'
import './Loader.css'

export const Loader = () => {

    return (
        <div className='loader-wrap'>
            <div className="lds-ellipsis">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}
