import { db } from '~/utils/db.server';
import { FactorsRepository } from './factors.repository';

export const factorsRepository = new FactorsRepository(db);
