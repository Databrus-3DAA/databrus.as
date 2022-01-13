import Link from 'next/link';
import style from '@styles/Home/Header.module.css';
import mStyle from '@styles/Home/Mobile/Header.module.css'
import { useState } from 'react';
import { MdMenu } from 'react-icons/md';
import { navItems } from '@assets/data';
import { useScroll } from '@lib/hooks/useScroll';
import { useMediaQuery } from 'react-responsive';

function MobileMenu({ ignore }: { ignore: boolean }) {
	const [navBarOpen, setNavBarOpen] = useState(false);
	const listItems = navItems.map((item: any) => <Link key={item.label} href={item.path}><a className={mStyle.dropItem} onClick={() => {setNavBarOpen(!navBarOpen)}}>{item.label}</a></Link>);
	const scroll = useScroll();
	const transparent = ignore ? false :  scroll < 20;
	
	return (
		<div className={style.container}>
			<div className={transparent ? style.hide : style.show}>
				<div className={`${style.title} ${transparent ? style.tHide : style.tShow}`}>DATABRUS UB</div>
				
				<button className={mStyle.button} onClick={() => {setNavBarOpen(!navBarOpen)}} aria-label="Open nav menu"><MdMenu /></button>
					
				<div className={`${mStyle.dropdown} ${navBarOpen ? mStyle.show : mStyle.hide}`} id="dropdown">
					{ listItems }
				</div>
			</div>
		</div>
	)
};

function Menu({ ignore }: { ignore: boolean }) {
	const listItems = navItems.map((item: any) => <Link key={item.label} href={item.path}><a className={style.item}>{item.label}</a></Link>);
	const scroll = useScroll();
	const transparent = ignore ? false :  scroll < 100;

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

function Header({ ignore }: { ignore: boolean }) {
	return useMediaQuery({ maxWidth: 768 }) ? <MobileMenu ignore={ignore} /> : <Menu ignore={ignore} />;
};

export default Header;