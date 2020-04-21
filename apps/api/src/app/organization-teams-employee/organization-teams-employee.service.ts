import { Injectable } from '@nestjs/common';
import { CrudService } from '../core';
import { OrganizationTeamsEmployee } from './organization-teams-employee.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class OrganizationTeamsEmployeeService extends CrudService<
	OrganizationTeamsEmployee
> {
	constructor(
		@InjectRepository(OrganizationTeamsEmployee)
		private readonly organizationTeamsEmployee: Repository<
			OrganizationTeamsEmployee
		>
	) {
		super(organizationTeamsEmployee);
	}
}
