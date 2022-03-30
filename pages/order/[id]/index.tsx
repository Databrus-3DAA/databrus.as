import useSWR from 'swr';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@components/Order/Header';
import { useRouter } from 'next/router';
import { fetcher } from '@lib/utils';
import { Footer } from '@components/Home';
import { Item } from '@prisma/client';
import { productsImgs } from '@assets/img/products';
import { Product } from '@lib/types';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import style from '@styles/Order/Order.module.css';

function Order() {
	const { query: { id }} = useRouter();
	const { data, error } = useSWR<Item[]>(id ? `/api/machines/${id}/items` : null, fetcher);

	if(typeof window == 'undefined') return null;

	return (
		<div>
			<Head>
				<title>Velg produkt | Databrus UB</title>
			</Head>

			<div className={style.container}>
				<Header href='/order' title='Velg Produkt' />
				
				<div className={style.main}>
					{((!data && !error) || !id) && 
						<div className={style.status}>Loading...</div>
					}

					{(error && !data) &&
						<div className={style.status}>Noe gikk galt</div>
					}

					{(!error && data) &&
						<div className={style.itemContainer}>
							{
								data.map((item: Item) =>
									<Link key={item.id} href={`/order/${item.machineId}/${item.name}`}>
										<a className={style.machineItem}>
											<div className={style.machineItemText}>{item.label}</div>
											<div>
												<Image src={productsImgs[item.name as Product]} alt="" />
											</div>
											<div className={style.stockAndPrice}>
												<div className={style.machineItemText}>Qty: {item.stock}</div>
												<div className={style.spacer} />
												<div className={style.machineItemText}>{item.price.toFixed(2)} kr</div>
											</div>
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