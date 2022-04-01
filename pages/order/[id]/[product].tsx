import useSWR from 'swr';
import Head from 'next/head';
import Header from '@components/Order/Header';
import { useRouter } from 'next/router';
import { fetcher, fetcherPost } from '@lib/utils';
import { useMediaQuery } from 'react-responsive';
import { Footer } from '@components/Home';
import { Item } from '@prisma/client';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { useState } from 'react';
import style from '@styles/Order/Order.module.css';

function Payment() {
	const { query: { id, product } } = useRouter();
	const { data, error } = useSWR<Item>((id && product) ? `/api/machines/${id}/items/${product}` : null, fetcher);
	const mobile = useMediaQuery({ maxWidth: 768 });

	const [phone, setPhone] = useState<string>('');

	const phoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPhone(e.target.value);
	};

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(phone);

		fetcherPost('/api/vipps/initPayment', {
			phone,
			product,
			machineId: 2
		})
		.then(res => console.log(res))
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
							<form onSubmit={onSubmit}>
								Phone
								<input type="text" name="phone" onChange={phoneChange} maxLength={8} minLength={8} />
								<input type="submit" value="Submit" />
							</form>
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