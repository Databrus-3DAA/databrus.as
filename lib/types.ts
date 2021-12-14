export type Stock = {
	label: string;
	stock: number;
}

export type Product =
	'cocaCola' |
	'cocaColaZero' |
	'pepsi' |
	'pepsiMax' |
	'fanta';

export type ProcutImages = {
	[key in Product]: any
}