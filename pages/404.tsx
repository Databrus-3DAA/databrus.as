import Head from 'next/head';
import Link from 'next/link';
import styles from '@styles/Error.module.css';

function Custom404() {
	return (
		<div className={styles.container}>
			<Head>
				<title>404 | Page could not be found</title>
			</Head>

			<div className={styles.title}>
				<div>404</div>
				<div className={styles.separator} />
				<div>This page could not be found</div>
			</div>

			<Link href="/">
				<a className={styles.button}>Go Back to Home</a>
			</Link>
		</div>
	)
};

export default Custom404;