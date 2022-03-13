import { ActionFunction, Form, json, redirect, useActionData } from 'remix';
import { factorsRepository } from '~/repositories';
import { CreateFactorScheme, CreateFactorSchemeType } from '~/schema/factor';
import { FormActionData } from '~/types';

const badRequest = (data: AddFactorFormActionData) =>
	json(data, { status: 400 });

export const addFormAction: ActionFunction = async ({ request }) => {
	const formData = await request.formData();
	const name = formData.get('name');
	if (typeof name !== 'string') {
		return badRequest({
			formErrors: ['Form not submitted correctly'],
		});
	}

	const parseResult = CreateFactorScheme.safeParse({ name });

	if (!parseResult.success) {
		return badRequest({
			...parseResult.error.formErrors,
			values: { name },
		});
	}

	await factorsRepository.create(parseResult.data);
	return null;
};

export type AddFactorFormActionData = FormActionData<CreateFactorSchemeType>;
export function AddFactorForm() {
	const actionData = useActionData<AddFactorFormActionData>();
	return (
		<Form method="post">
			<div className={`mb-6`}>
				<label
					htmlFor="name"
					className="block mb-2 text-sm font-medium text-gray-300"
				>
					Name
				</label>
				<input
					type="text"
					id="name"
					name="name"
					defaultValue={actionData?.values?.name}
					className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
					placeholder="ex) book"
					aria-invalid={Boolean(actionData?.fieldErrors?.name) || undefined}
					aria-errormessage={
						actionData?.fieldErrors?.name ? 'name-error' : undefined
					}
				/>
				{actionData?.fieldErrors?.name ? (
					<p className="text-pink-500" role="alert" id="name-error">
						{actionData.fieldErrors.name}
					</p>
				) : null}
			</div>
			<button
				type="submit"
				className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
			>
				Add
			</button>
		</Form>
	);
}
