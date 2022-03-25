import React from 'react';
import Link from 'next/link';
import style from '@styles/Order/Header.module.css';
import { MdOutlineKeyboardBackspace } from 'react-icons/md';

function Header({ href, title}: { href: string, title: string }) {
	return (
		<div className={style.header}>
			<Link href={href}>
				<a>
					<div className={style.backButton}>
						<MdOutlineKeyboardBackspace className={style.icon}/>
					</div>
				</a>
			</Link>

			<div className={style.title}>{title}</div>	
		</div>
	)
}

export default Header;