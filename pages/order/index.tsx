import React from 'react';
import style from '@styles/Order/Choose.module.css';

function Machines() {
    return (
        <div className={style.container}>
            <div className={style.label}>
                <p className={style.labeltx}>Velg maskin</p>
            </div>
            <div className={style.undersqare}>
                <button className={style.maskin}></button>
                {/* <button className={style.maskin}></button>
                <button className={style.maskin}></button>
                <button className={style.maskin}></button> */}
            </div>
        </div>
    )
};

export default Machines;