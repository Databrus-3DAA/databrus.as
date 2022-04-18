import { useRouter } from 'next/router';
import React from 'react';

function fallBack() {
	const { query: { orderId } } = useRouter();

	return (
		<div>
			Fallback for order {orderId}
		</div>
	)
}

export default fallBack;