import { Connection } from 'typeorm';
import { CandidateCv } from './candidate_cv.entity';

export const createCandidateCVs = async (
	connection: Connection
): Promise<CandidateCv[]> => {
	const candidateCV: CandidateCv[] = [
		{
			name: 'Test',
			cvUrl: 'test/test/test'
		},
		{
			name: 'Test2',
			cvUrl: 'test/test/test2'
		},
		{
			name: 'Test3',
			cvUrl: 'test/test/test3'
		},
		{
			name: 'Test4',
			cvUrl: 'test/test/test4'
		},
		{
			name: 'Test5',
			cvUrl: 'test/test/test5	'
		}
	];

	for (let i = 0; i < candidateCV.length; i++) {
		await insertCandidateSourses(connection, candidateCV[i]);
	}

	return candidateCV;
};

const insertCandidateSourses = async (
	connection: Connection,
	candidateCV: CandidateCv
): Promise<void> => {
	await connection
		.createQueryBuilder()
		.insert()
		.into(CandidateCv)
		.values(candidateCV)
		.execute();
};
