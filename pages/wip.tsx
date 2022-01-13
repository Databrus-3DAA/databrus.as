import Head from 'next/head';
import Link from 'next/link';
import styles from '@styles/WIP.module.css';

function wip() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Under utvikling</title>
			</Head>

			<div className={styles.title}>Under utvikling</div>
			
			<Link href="/">
				<a className={styles.button}>Tilbake til Hjemmeside</a>
			</Link>
		</div>
	)
};

export default wip;