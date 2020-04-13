import {
	ICandidateCvCreateInput,
	ICandidateCv,
	ICandidateCvFindInput
} from '../../../../../../libs/models/src/lib/candidate-cv.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { first } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class CandidateCVsService {
	constructor(private http: HttpClient) {}

	create(createInput: ICandidateCvCreateInput): Promise<ICandidateCv> {
		console.log('createInput', createInput);
		return this.http
			.post<ICandidateCv>('/api/candidate_cv', createInput)
			.pipe(first())
			.toPromise();
	}

	// getAll(
	// 	findInput?: ICandidateCvFindInput
	// ): Promise<{ items: any[]; total: number }> {
	// 	const data = JSON.stringify({ findInput });

	// 	return this.http
	// 		.get<{ items: ICandidateCv[]; total: number }>(
	// 			`/api/candidate-cv`,
	// 			{
	// 				params: { data }
	// 			}
	// 		)
	// 		.pipe(first())
	// 		.toPromise();
	// }
	getAll(
		relations?: string[],
		findInput?: ICandidateCvFindInput
	): Promise<{ items: any[]; total: number }> {
		const data = JSON.stringify({ relations, findInput });
		console.log('data', data);
		return this.http
			.get<{ items: ICandidateCv[]; total: number }>(
				`/api/candidate-cv`,
				{
					params: { data }
				}
			)
			.pipe(first())
			.toPromise();
	}

	/////////////

	update(id: string, updateInput: any): Promise<any> {
		return this.http
			.put(`/api/organization-vendors/${id}`, updateInput)
			.pipe(first())
			.toPromise();
	}

	delete(id: string): Promise<any> {
		return this.http
			.delete(`/api/organization-vendors/${id}`)
			.pipe(first())
			.toPromise();
	}
}
