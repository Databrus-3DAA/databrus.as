import React from 'react';
import Head from 'next/head';
import styles from '@styles/Error.module.css';

function Custom500() {
    return (
        <div className={styles.container}>
            <Head>
                <title>500 | Internal Server Error</title>
            </Head>

            <div className={styles.title}>
                <div>500</div>
                <div className={styles.separator} />
                <div>Internal Server Error</div>
            </div>
        </div>
    )
};

export default Custom500;