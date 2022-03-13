import { Factors } from '@prisma/client';
import { json, LoaderFunction, useLoaderData } from 'remix';
import { ScreenContainer } from '~/components/ScreenContainer/ScreenContainer';
import { factorsRepository } from '~/repositories';

type LoaderData = { factors: Factors[] };
export const loader: LoaderFunction = async () => {
	const factors = await factorsRepository.radomList(3);
	const data: LoaderData = { factors };
	return json(data);
};

export default function Index() {
	const { factors } = useLoaderData<LoaderData>();
	return (
		<ScreenContainer>
			<ul>
				{factors.map((factor) => (
					<li key={factor.id}>{factor.name}</li>
				))}
			</ul>
		</ScreenContainer>
	);
}
