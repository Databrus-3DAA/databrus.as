import useSWR from 'swr';
import { useRouter } from 'next/router';
import { fetcher } from '@lib/utils';

function Payment() {
	const { query: { id, product } } = useRouter();
	const { data, error } = useSWR(`/api/machines/${id}/items/${product}`, fetcher);
	
	if(error) {
		console.log(error)
		return "An error has occured";
	}

	if(!data) return "Loading...";

	console.log(data)

	return (
		<div>
			
		</div>
	)
};

export default Payment;