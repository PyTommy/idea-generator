import { z } from 'zod';

export const CreateFactorScheme = z.object({
	name: z
		.string({
			required_error: 'Name is required.',
		})
		.min(2, { message: 'Name should have more than 2 chars.' }),
});
export type CreateFactorSchemeType = z.infer<typeof CreateFactorScheme>;
