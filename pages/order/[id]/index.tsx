import React from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import style from '@styles/Order/Order.module.css';

function Order() {
    const { query, back } = useRouter();

    console.log(query.id);
    console.log(query.product);
    
    return (
        <div className={style.container}>
            <div className={style.labelTop}>Velg Produkt</div>

            <div className={style.label1}>
                <div className={style.labelTx}>DATABRUS</div>
            </div>
            <div className={style.label2}>
                <div className={style.labelTx}>DATABRUS</div>
            </div>
            
        </div>
    )
};

export default Order;