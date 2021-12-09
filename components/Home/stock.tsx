import React from 'react';
import style from '@styles/Home/Stock.module.css';

function Stock(){
    return(
            <div className={style.stock}>
                <div>
                    Coca cola
                </div>

                <div>
                    Fanta
                </div>

                <div>
                    Red Bull
                </div>

                <div>
                    Sprite
                </div>

                <div>
                    Battery
                </div>

                <div>
                    Mønster
                </div>
            </div>
    )
};

export default Stock;