import React from 'react';
import { useRouter } from 'next/router';

function Order() {
    const { query, back } = useRouter();

    console.log(query.id);
    console.log(query.product);
    
    return (
        <div>
            
        </div>
    )
};

export default Order;