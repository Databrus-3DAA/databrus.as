import React from 'react';
import Head from 'next/head';
import { Header, Footer } from '@components/Home';
import style from '@styles/Home/Main.module.css';
import mStyle from '@styles/Home/Mobile/Main.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { isMobile } from '@lib/utils';
import { AiFillInstagram } from 'react-icons/ai';
import { MdLocationOn, MdMail } from 'react-icons/md';
import { FaDiscord } from 'react-icons/fa';
import Logo from '@assets/img/logo.png';
import Tomas from '@assets/img/1.png';

function Home() {
	if(typeof window == 'undefined') return null;
	
	const mobile = isMobile();

	return (
		<div>
			<Head>
				<title>Databrus UB</title>
				<link rel="icon" href="./favicon.ico" />
			</Head>

			<Header />

			<div className={style.container}>
				<div id="home" className={`${mobile ? style.bgimg3 : style.bgimg1}`} style={{backgroundImage:"url('/img/1.jpg')"}}>
					<div className={style.titleContainer}>
						<div className={mobile ? mStyle.title : style.title}>
							<span>DATABRUS U</span>B
						</div>
					</div>
				</div>
				
				<div id="about" className={style.main}>
					<h1 className={style.center}>OM DATABRUS</h1>
					<p className={style.center}>
						<em className={style.highlight}>Hva er greia med å sette opp prisen med 5kr hver uke, nå kan dere få billigere brus/snacks å sluke.</em>
					</p>

					<p>
						3DAA (VG3 Dataelektronikerfaget) har fikset en salgsautomat. Vår nydelige lærer Tomas Olaj ga oss idéen å fikse denne 
						automaten, og etter mye blod, svette og tårer har vi klart det. Vårt ønske er å tilby alle bedre produkter til bedre priser. Vi har 
						dannet en elevbedrift som heter Databrus, og laget denne nettsiden + all software til automaten.
					</p>

					<div className={mobile ? mStyle.flex : style.grid}>
						<div className={style.logo}>
							<Image src={Logo} alt="Logo" layout="responsive" width={450} height={450} />
						</div>

						<div>
							<h1 className={style.center}>Historie</h1>
							
							<p>
								Databrus UB er et selskap dannet av fem entusiastiske elever 
								på Malakoff Vgs i 2021. Vi hadde en drøm om å fikse denne 
								vakre automaten, slik at alle kunne få et bredere 
								utvalg på skolen av snacks, drikke og godt humør. Dere er 
								så heldige at dere for lov til å bli med på denne reisen med 
								oss. Har dere innspill eller idéer, kan dere sende det til vår 
								kundeservice (mail står under). Føler dere noe ikke er som 
								det skal, eller at noe kunne vært bedre, ikke nøl med å ta 
								kontakt.
							</p>
						</div>
					</div>
				</div>

				<div id="team" className={`${mobile ? style.bgimg3 : style.bgimg2}`} style={{backgroundImage:"url('https://c.pxhere.com/photos/96/c7/accomplishment_achievement_adult_Bangkok_businessmen_businesswomen_celebrating_celebration-1555417.jpg!d"}}>
					<div className={style.titleContainer}>
						<div className={mobile ? mStyle.title : style.title}>
							<span>TEAME</span>T
						</div>
					</div>
				</div>

					<div className={style.main}>
						<h1 className={style.center}>Møt teamet bak Databrus</h1>
						<p className={`${style.center} ${style.highlight}`}>
							Under er alles navn og hovedrolle i teamet.
						</p>
						<div className={style.team}>

						<div id="Tomas" className={style.teammember}>
							<div className={style.teambilde}>
								<Image src={Tomas} alt="Tomas" layout="responsive" />
							</div>
							<div className={style.teamname}>Grunnlegger: Tomas</div>
						</div>

						<div id="Erling" className={style.teammember}>
							<div className={style.teambilde}>
								<Image src={Tomas} alt="Erling" layout="responsive" />
							</div>
							<div className={style.teamname}>CEO: Erling</div>
						</div>

						<div id="Linus" className={style.teammember}>
							<div className={style.teambilde}>
								<Image src={Tomas} alt="Linus" layout="responsive" />
							</div>
							<div className={style.teamname}>VP: Linus</div>
						</div>

						<div id="Thomas" className={style.teammember}>
							<div className={style.teambilde}>
								<Image src={Tomas} alt="Thomas" layout="responsive" />
							</div>
							<div className={style.teamname}>Utvikler: Thomas</div>
						</div>

						<div id="Sander" className={style.teammember}>
							<div className={style.teambilde}>
								<Image src={Tomas} alt="Sander" layout="responsive" />
							</div>
							<div className={style.teamname}>Utvikler: Sander</div>
						</div>

						<div id="Steinar" className={style.teammember}>
							<div className={style.teambilde}>
								<Image src={Tomas} alt="Steinar" layout="responsive" />
							</div>
							<div className={style.teamname}>Personalsjef: Steinar</div>
						</div>

						</div>
					</div>

				
				<div id="contact" className={`${mobile ? style.bgimg3 : style.bgimg2}`} style={{backgroundImage:"url('/img/1.jpg')"}}>
					<div className={style.titleContainer}>
						<div className={mobile ? mStyle.title : style.title}>
							<span>KONTAKT OS</span>S
						</div>
					</div>
				</div>

				<div className={style.main} style={{maxWidth: '100vw'}}>
					<div className={style.contact} style={{flexDirection: mobile ? 'column' : 'row', width: '100%'}}>
						<div>
							<MdLocationOn className={style.icon} />
							<Link href="https://goo.gl/maps/9JbEKKbJYLHHeNor9">Dyreveien 9, 1532 Moss</Link>
						</div>

						<div>
							<MdMail className={style.icon} />
							<Link href="mailto:databrus.contact@gmail.com">databrus.contact@gmail.com</Link>
						</div>

						<div>
							<AiFillInstagram className={style.icon} />
							<Link href="https://instagram.com/databrus.ub">databrus.ub</Link>
						</div>
						
						<div>
							<FaDiscord className={style.icon} />
							<Link href="https://discord.gg/QDVqhZ2KrP">Community Discord</Link>
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</div>
	)
};

export default Home;