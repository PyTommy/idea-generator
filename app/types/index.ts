export type FormActionData<
	T extends Record<string, any> = Record<string, any>
> = {
	formErrors?: string[];
	fieldErrors?: {
		[key in keyof T]?: string;
	};
	values?: { [K in keyof T]?: T[K] };
};
