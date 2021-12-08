/* eslint-disable react-hooks/rules-of-hooks */
import useSWR from "swr";
import { iItem, iItems } from "@type/interfaces";

function fetcher(url: string) {
    return window.fetch(url).then(res => res.json());
};

export function getItems() {
    const {data, error} = useSWR<iItems>(`api/machine/items`, fetcher);
    
    return {
        items: data,
        isLoading: !error && !data,
        isError: error
    };
};

export function getItem(id: string) {
    const {data, error} = useSWR<iItem>(`/api/api/machine/items/${id}`, fetcher);
    
    return {
        item: data,
        isLoading: !error && !data,
        isError: error
    };
};