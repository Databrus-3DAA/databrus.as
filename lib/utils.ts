import axios from "axios";
import { useMediaQuery } from "react-responsive";

export const fetcher = async (url: string) => await axios.get(url).then((res) => res.data);

export function isMobile() {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	return useMediaQuery({ maxWidth: 768 });
};