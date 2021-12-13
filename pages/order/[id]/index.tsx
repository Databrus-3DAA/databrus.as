import useSWR from 'swr';
import Head from 'next/head';
import Link from 'next/link';
import style from '@styles/Order/Order.module.css';
import mStyle from '@styles/Order/Mobile/Order.module.css';
import { useRouter } from 'next/router';
import { fetcher } from '@lib/utils';
import { useMediaQuery } from 'react-responsive';
import { Footer } from '@components/Home';
import { MdOutlineKeyboardBackspace } from 'react-icons/md';
import { Item } from '@prisma/client';

function Order() {
	const { query: { id }} = useRouter();
	const { data, error } = useSWR<Item[]>(id ? `/api/machines/${id}/items` : null, fetcher);
	const mobile = useMediaQuery({ maxWidth: 768 });

	if(typeof window == 'undefined') return null;

	return (
		<div>
			<Head>
				<title>Velg produkt | Databrus UB</title>
			</Head>
			
			<div className={style.container}>
				<div className={style.header}>
					<Link href='/order'>
						<a>
							<div className={style.backButton}>
								<MdOutlineKeyboardBackspace className={style.icon}/>
							</div>
						</a>
					</Link>

					<div className={style.title}>Velg Produkt</div>
				</div>
				
				<div className={style.main}>
					{((!data && !error) || !id) && 
						<div className={style.status}>Loading...</div>
					}

					{(error && !data) &&
						<div className={style.status}>Noe gikk galt</div>
					}
					
					{(!error && data) &&
						<div className={style.itemContainer}>

						</div>
					}
				</div>
			</div>
			
			<Footer />
		</div>
	)
};

export default Order;