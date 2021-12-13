import { useEffect, useState } from "react";

export function useScroll() {
	const [ scrollValue, setScrollValue ] = useState(0);
	
	const handleScroll = () => {
		setScrollValue(document.documentElement.scrollTop);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return scrollValue;
}