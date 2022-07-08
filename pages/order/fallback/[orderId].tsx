import { useRouter } from 'next/router';

function FallBack() {
	const { query: { orderId } } = useRouter();

	return (
		<div>
			Fallback for order {orderId}
		</div>
	)
}

export default FallBack;