import { BaseEntityModel as IBaseEntityModel } from './base-entity.model';
import { OrganizationTeams } from '..';
import { Employee } from './employee.model';
import { Role } from './role.model';

export interface OrganizationTeamsEmployee extends IBaseEntityModel {
	organizationTeamId: string;
	employeeId: string;
	roleId?: string;
	organizationTeams: OrganizationTeams;
	employee: Employee;
	role?: Role;
}
