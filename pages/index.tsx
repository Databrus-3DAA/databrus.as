import React from 'react';
import Head from 'next/head';
import { Header, Footer } from '@/components/Home';
import style from '@/styles/Home/Main.module.css';
import test from '@/assets/img/test.jpg';
import Image from 'next/image';

function Home() {
	if(typeof window == 'undefined') return null;

	return (
		<div>
			<Head>
				<title>Databrus UB</title>
				<link rel="icon" href="./favicon.ico" />
			</Head>

			<Header />

			<div className={style.container}>

				<div id="home" className={style.home}>
					<Image src={test} alt="" layout="fill" objectFit="cover"  />
					
					<div className={style.tittleContainer}>
						<div className={style.tittle}>DATABRUS UB</div>
					</div>	
				</div>
				
				<div id="about" className={style.main}>
					<div></div>
				</div>

				<div id="team" className={style.main}>
					
				</div>

				<div id="contact" className={style.main}>
					
				</div>
			</div>

			<Footer />
		</div>
	)
};

export default Home;