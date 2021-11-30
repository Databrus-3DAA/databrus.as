import { useMediaQuery } from "react-responsive";

export const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function isMobile() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useMediaQuery({ maxWidth: 768 });
};