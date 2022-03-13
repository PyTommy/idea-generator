import { Factors, PrismaClient } from '@prisma/client';

const TABLE_NAME = 'factors' as const;
export class FactorsRepository {
	private client: PrismaClient;
	private table: PrismaClient[typeof TABLE_NAME];
	constructor(client: PrismaClient) {
		this.client = client;
		this.table = client.factors;
	}

	public async list() {
		return this.table.findMany({
			take: 100,
			orderBy: { createdAt: 'desc' },
		});
	}

	public async create(data: { name: string }) {
		return this.table.create({ data });
	}

	public async radomList(take: number) {
		return this.client.$queryRaw<
			Factors[]
		>`SELECT * FROM Factors ORDER BY RANDOM() LIMIT ${take}`;
	}
}
