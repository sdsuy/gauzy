import { CandidateSource } from './candidate_source.entity';
import { Controller, UseGuards, Post, Body, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiResponse, ApiOperation } from '@nestjs/swagger';
import { CrudController } from '../core/crud/crud.controller';
import { CandidateSourceService } from './candidate_source.service';
import { AuthGuard } from '@nestjs/passport';
import { ICandidateCvCreateInput } from 'libs/models/src/lib/candidate-cv.model';
import { CandidateCv } from '../candidate_cv/candidate_cv.entity';

@ApiTags('CandidateSource')
@UseGuards(AuthGuard('jwt'))
@Controller()
export class CandidateSourceController extends CrudController<CandidateSource> {
	constructor(
		private readonly candidateSourceService: CandidateSourceService
	) {
		super(candidateSourceService);
	}
	@ApiOperation({ summary: 'Create records in Bulk' })
	@ApiResponse({
		status: HttpStatus.CREATED,
		description: 'Records have been successfully created.' /*, type: T*/
	})
	@ApiResponse({
		status: HttpStatus.BAD_REQUEST,
		description:
			'Invalid input, The response body may contain clues as to what went wrong'
	})
	// @UseGuards(PermissionGuard)
	// @Permissions(PermissionsEnum.ORG_CANDIDATES_EDIT)
	@Post('')
	async createBulk(
		@Body() input: ICandidateCvCreateInput[],
		...options: any[]
	): Promise<CandidateCv[]> {
		console.log('input', input);
		/**
		 * Use a dummy image avatar if no image is uploaded for any of the Candidate in the list
		 */
		// input
		// 	.filter((entity) => !entity.user.imageUrl)
		// 	.map(
		// 		(entity) =>
		// 			(entity.user.imageUrl = getUserDummyImage(entity.user))
		// 	);
		// this.commandBus.execute(new CandidateBulkCreateCommand(input));
		return;
	}
}
