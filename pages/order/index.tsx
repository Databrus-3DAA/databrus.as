import React from 'react';
import useSWR from 'swr';
import { iMachines } from '@lib/types/interfaces';
import { fetcher } from '@lib/utils';
import style from '@styles/Order/Choose.module.css';

function Machines() {
    const { data, error } = useSWR('/api/machines', fetcher);
    
    if(error) {
        console.log(error)
        return "An error has occured";
    }

    if(!data) return "Loading...";

    console.log(data)

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