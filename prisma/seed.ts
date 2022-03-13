import { PrismaClient } from '@prisma/client';
const db = new PrismaClient();

async function seed() {
	await Promise.all(
		getFactors().map((factor) => {
			return db.factors.create({ data: factor });
		})
	);
}

seed();

function getFactors() {
	// shout-out to https://icanhazdadjoke.com/
	return [
		{
			name: 'book',
		},
		{
			name: 'keyboard',
		},
		{
			name: 'language',
		},
		{
			name: 'screen',
		},
		{
			name: 'muscle',
		},
		{
			name: 'mouse',
		},
		{
			name: 'note',
		},
		{
			name: 'whiteboard',
		},
		{
			name: 'humidifier',
		},
	];
}
