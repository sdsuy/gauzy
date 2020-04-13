import { ICandidateCvCreateInput } from './../../../../../libs/models/src/lib/candidate-cv.model';
import { CandidateCv } from './candidate_cv.entity';
import {
	Controller,
	UseGuards,
	Post,
	HttpStatus,
	Body,
	Get,
	Query
} from '@nestjs/common';
import { ApiTags, ApiResponse, ApiOperation } from '@nestjs/swagger';
import { CrudController } from '../core/crud/crud.controller';
import { CandidateCVService } from './candidate_cv.service';
import { AuthGuard } from '@nestjs/passport';
import { PermissionGuard } from '../shared/guards/auth/permission.guard';

@ApiTags('CandidateDocks')
@UseGuards(AuthGuard('jwt'))
@Controller()
export class CandidateCVController extends CrudController<CandidateCv> {
	constructor(private readonly candidateCVService: CandidateCVService) {
		super(candidateCVService);
	}
	candidate: import('../candidate/candidate.entity').Candidate;
	id?: string;
	name?: string;
	candidateId: string;
	cvUrl?: string;
	createdAt?: Date;
	updatedAt?: Date;

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
	@Post()
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

	@ApiOperation({ summary: 'Find all organizations.' })
	@ApiResponse({
		status: HttpStatus.OK,
		description: 'Found organizations',
		type: CandidateCv
	})
	@ApiResponse({
		status: HttpStatus.NOT_FOUND,
		description: 'Record not found'
	})
	// @UseGuards(PermissionGuard)
	// @Permissions(PermissionsEnum.ALL_ORG_VIEW)
	@Get()
	async findAll(): // @Query('data') data: string
	Promise<any> {
		console.log('test get rout in candidate cv');
		// const { relations, findInput } = JSON.parse(data);
		return // this.candidateCVService.findAll({ where: findInput, relations });
	}
}
