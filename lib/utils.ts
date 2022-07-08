import axios from "axios";

export const fetcher = async (url: string) => await axios.get(url).then((res) => res.data);
export const fetcherPost = async (url: string, data: any) => await axios.post(url, data).then((res) => res.data);