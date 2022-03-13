import { Factors } from '@prisma/client';
import { LoaderFunction, json, useLoaderData } from 'remix';
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
		<div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
			<ul>
				{data.factors.map((factor) => (
					<li key={factor.id}>{factor.name}</li>
				))}
			</ul>
		</div>
	);
}
