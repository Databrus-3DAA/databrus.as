/* eslint-disable react-hooks/rules-of-hooks */
import { useMediaQuery } from "react-responsive";

export default function isMobile() {
    return useMediaQuery({ maxWidth: 768 });
};