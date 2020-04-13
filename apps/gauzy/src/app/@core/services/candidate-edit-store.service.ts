import { Candidate } from '@gauzy/models';
import { BehaviorSubject } from 'rxjs';

/**
 * Service used to update candidate
 */
export class CandidateEditStore {
	private _selectedCandidate: Candidate;

	selectedCandidate$: BehaviorSubject<Candidate> = new BehaviorSubject(
		this.selectedCandidate
	);

	set selectedCandidate(candidate: Candidate) {
		this._selectedCandidate = candidate;
		this.selectedCandidate$.next(candidate);
	}

	get selectedCandidate(): Candidate {
		return this._selectedCandidate;
	}

	clear() {
		localStorage.clear();
	}
}
