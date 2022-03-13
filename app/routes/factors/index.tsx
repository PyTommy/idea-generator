import { Factors } from '@prisma/client';
import { LoaderFunction, json, useLoaderData } from 'remix';
import {
	AddFactorForm,
	addFormAction,
} from '~/forms/AddFactorForm/AddFactorForm';
import { ScreenContainer } from '~/components/ScreenContainer/ScreenContainer';
import { factorsRepository } from '~/repositories';

type LoaderData = { factors: Factors[] };
export const loader: LoaderFunction = async () => {
	const factors = await factorsRepository.list();
	const data: LoaderData = { factors };
	return json(data);
};

export const action = addFormAction;

export default function FactorsTableRoute() {
	const data = useLoaderData<LoaderData>();
	return (
		<ScreenContainer>
			<div className="flex w-full">
				<section className="flex-grow">
					<ul>
						{data.factors.map((factor) => (
							<li key={factor.id} className="font-bold">
								{factor.name}
							</li>
						))}
					</ul>
				</section>
				<section className="w-1/3">
					<AddFactorForm />
				</section>
			</div>
		</ScreenContainer>
	);
}
