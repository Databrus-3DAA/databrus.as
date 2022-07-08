import useSWR from 'swr';
import Head from 'next/head';
import Link from 'next/link';
import Header from '@components/Order/Header';
import { fetcher } from '@lib/utils';
import { Footer } from '@components/Home';
import { Machine } from '@prisma/client';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import style from '@styles/Order/Order.module.css';

function Order() {
	const { data, error } = useSWR<Machine[]>(`/api/machines/`, fetcher);

	if(typeof window == 'undefined') return null;

	return (
		<div>
			<Head>
				<title>Velg maskin | Databrus UB</title>
			</Head>

			<div className={style.container}>
				<Header href='/' title='Velg Maskin' />

				<div className={style.main}>
					{(!data && !error) && 
						<div className={style.status}>Loading...</div>
					}

					{(error && !data) &&
						<div className={style.status}>Noe gikk galt</div>
					}

					{(!error && data) &&
						<div className={style.itemContainer}>
							{
								data.map((machine: Machine) =>
									<Link key={machine.id} href={`/order/${machine.id}`}>
										<a className={style.machine}>
											<div>Lokasjon: {machine.name}</div>
											<div>Adresse: {machine.address}</div>
											<div>Lokasjon beskrivelse:<br/>{machine.description}</div>
											<div>Temperatur: {machine.temperature}°C</div>
										</a>
									</Link>
								)
							}
						</div>
					}
				</div>
			</div>

			<Footer />
		</div>
	)
};

export default Order;
// export default withPageAuthRequired(Order);