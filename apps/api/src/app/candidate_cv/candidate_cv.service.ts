import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CrudService } from '../core/crud/crud.service';
import { CandidateCv } from './candidate_cv.entity';

@Injectable()
export class CandidateCVService extends CrudService<CandidateCv> {
	constructor(
		@InjectRepository(CandidateCv)
		private readonly candidateCVRepository: Repository<CandidateCv>
	) {
		super(candidateCVRepository);
	}
}
