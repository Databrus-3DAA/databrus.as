import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import style from '../styles/Items.module.css';

function Items({ props }: any) {
    const router = useRouter();
    const disabled = props.stock <= 0;
    
    const onClick = () => {
        if(disabled) return;
        
        router.push({
            pathname:"/payment",
            query: { id: props.name }
        });
    };

    return (
        <div className={style.box} onClick={onClick}>
            <Image src={`/img/${props.name}.png`} alt="Image" width={400} height={200} />
            <div>{`${props.price} kr`}</div>
            
            {disabled && <div className={style.boxDisabled} />}
        </div>
    )
};

export default Items;