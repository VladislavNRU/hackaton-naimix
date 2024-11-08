export type Nullish = null | undefined;

export const isNullish = (value: unknown): value is Nullish => {
	return value === null || value === undefined;
};

export const isString = (value: unknown): value is string => {
	return typeof value === 'string';
};

export const isNumber = (value: unknown): value is number => {
	return typeof value === 'number';
};
