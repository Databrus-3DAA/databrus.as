import useSWR from 'swr';
import Head from 'next/head';
import Link from 'next/link';
import style from '@styles/Order/Order.module.css';
import mStyle from '@styles/Order/Mobile/Order.module.css';
import { fetcher, isMobile } from '@lib/utils';
import { Footer } from '@components/Home';
import { MdOutlineKeyboardBackspace } from 'react-icons/md';

function Order() {
	const { data, error } = useSWR(`/api/machines/`, fetcher);
	const mobile = isMobile();

	if(typeof window == 'undefined') return null;

	return (
		<div>
			<Head>
				<title>Velg maskin | Databrus UB</title>
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

					<div className={style.title}>Velg maskin</div>
				</div>
				
				<div className={style.main}>
					{(!data && !error) && 
						<div className={style.status}>Loading...</div>
					}

					{error && 
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