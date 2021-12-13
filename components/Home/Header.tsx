import Link from 'next/link';
import style from '@styles/Home/Header.module.css';
import mStyle from '@styles/Home/Mobile/Header.module.css'
import { useState } from 'react';
import { MdMenu } from 'react-icons/md';
import { navItems } from '@assets/data';
import { useScroll } from '@lib/hooks/useScroll';
import { useMediaQuery } from 'react-responsive';

function MobileMenu() {
	const [navBarOpen, setNavBarOpen] = useState(false);
	const listItems = navItems.map((item: any) => <Link key={item.label} href={item.path}><a className={mStyle.dropItem} onClick={() => {setNavBarOpen(!navBarOpen)}}>{item.label}</a></Link>);
	const transparent = useScroll() < 20;
	
	return (
		<div className={style.container}>
			<div className={transparent ? style.hide : style.show}>
				<div className={`${style.title} ${transparent ? style.tHide : style.tShow}`}>DATABRUS UB</div>
				
				<button className={mStyle.button} onClick={() => {setNavBarOpen(!navBarOpen)}}><MdMenu /></button>
					
				<div className={`${mStyle.dropdown} ${navBarOpen ? mStyle.show : mStyle.hide}`} id="dropdown">
					{ listItems }
				</div>
			</div>
		</div>
	)
};

function Menu() {
	const listItems = navItems.map((item: any) => <Link key={item.label} href={item.path}><a className={style.item}>{item.label}</a></Link>);
	const transparent = useScroll() < 100;

	return (
		<div className={style.container}>
			<div className={transparent ? style.hide : style.show}>           
				<div className={`${style.title} ${transparent ? style.tHide : style.tShow}`}>DATABRUS UB</div>     
				
				<div className={style.items}>
					{ listItems }
				</div>
			</div>
		</div>
	)
};

function Header() {
	return useMediaQuery({ maxWidth: 768 }) ? <MobileMenu /> : <Menu />;
};

export default Header;