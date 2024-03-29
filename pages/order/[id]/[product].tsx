import useSWR from 'swr';
import Head from 'next/head';
import Header from '@components/Order/Header';
import { useRouter } from 'next/router';
import { fetcher, fetcherPost } from '@lib/utils';
import { useMediaQuery } from 'react-responsive';
import { Footer } from '@components/Home';
import { Item } from '@prisma/client';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import style from '@styles/Order/Order.module.css';

function Payment() {
	const { query: { id, product }, push } = useRouter();
	const { data, error } = useSWR<Item>((id && product) ? `/api/machines/${id}/items/${product}` : null, fetcher);
	const mobile = useMediaQuery({ maxWidth: 768 });

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		fetcherPost('/api/vipps/initPayment', {
			product,
			machineId: id,
		})
		.then(res => console.log(res))
		.catch(err => console.log(err));		
	};

	const onClick = () => {
		const url = fetcherPost('/api/vipps/initPayment', {
			product,
			machineId: id,
		})
		.then(res => push(res.url))
		.catch(err => console.log(err));
	};

	if(typeof window == 'undefined') return null;

	return (
		<div>
			<Head>
				<title>Fullfør kjøp | Databrus UB</title>
			</Head>

			<div className={style.container}>
				<Header href={id ? `/order/${id}/` : '/order'} title='Betaling' />
				
				<div className={style.main}>
					{(!data && !error) && 
						<div className={style.status}>Loading...</div>
					}

					{(error && !data) &&
						<div className={style.status}>Noe gikk galt</div>
					}

					{(!error && data) &&
						<div className={style.itemContainer}>
							<button onClick={onClick}>Vipps</button>
						</div>
					}
				</div>
			</div>

			<Footer />
		</div>
	)
};

export default Payment;
// export default withPageAuthRequired(Payment);