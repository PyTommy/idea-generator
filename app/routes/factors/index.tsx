import { Factors } from '@prisma/client';
import { LoaderFunction, json, useLoaderData } from 'remix';
import { ScreenContainer } from '~/components/ScreenContainer/ScreenContainer';
import { factorsRepository } from '~/repositories';

type LoaderData = { factors: Factors[] };
export const loader: LoaderFunction = async () => {
	const factors = await factorsRepository.list();
	const data: LoaderData = { factors };
	return json(data);
};

export default function FactorsTableRoute() {
	const data = useLoaderData<LoaderData>();
	return (
		<ScreenContainer>
			<ul>
				{data.factors.map((factor) => (
					<li key={factor.id} className="font-bold">
						{factor.name}
					</li>
				))}
			</ul>
		</ScreenContainer>
	);
}
