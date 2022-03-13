import { PrismaClient } from '@prisma/client';

export class FactorsRepository {
	private table: PrismaClient['factors'];
	constructor(table: PrismaClient['factors']) {
		this.table = table;
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
}
