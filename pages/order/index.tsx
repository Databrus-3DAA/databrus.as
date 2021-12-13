import useSWR from 'swr';
import Head from 'next/head';
import Link from 'next/link';
import style from '@styles/Order/Order.module.css';
import mStyle from '@styles/Order/Mobile/Order.module.css';
import { fetcher } from '@lib/utils';
import { useMediaQuery } from 'react-responsive';
import { Footer } from '@components/Home';
import { MdOutlineKeyboardBackspace } from 'react-icons/md';
import { Machine } from '@prisma/client';

function Order() {
	const { data, error } = useSWR<Machine[]>(`/api/machines/`, fetcher);
	const mobile = useMediaQuery({ maxWidth: 768 });

	if(typeof window == 'undefined') return null;

	return (
		<div>
			<Head>
				<title>Velg maskin | Databrus UB</title>
			</Head>
			
			<div className={style.container}>
				<div className={style.header}>
					<Link href='/'>
						<a>
							<div className={style.backButton}>
								<MdOutlineKeyboardBackspace className={style.icon}/>
							</div>
						</a>
					</Link>

					<div className={style.title}>Velg Maskin</div>
				</div>
				
				<div className={style.main}>
					{(!data && !error) && 
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