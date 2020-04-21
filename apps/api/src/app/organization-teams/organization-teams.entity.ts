import { Column, Entity, Index, OneToMany } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { Base } from '../core/entities/base';
import { OrganizationTeams as IOrganizationTeams } from '@gauzy/models';
import { Employee } from '../employee/employee.entity';
import { OrganizationTeamsEmployee } from '../organization-teams-employee/organization-teams-employee.entity';

@Entity('organization_team')
export class OrganizationTeams extends Base implements IOrganizationTeams {
	@ApiProperty({ type: String })
	@IsString()
	@IsNotEmpty()
	@Index()
	@Column()
	name: string;

	@ApiProperty({ type: String })
	@IsString()
	@IsNotEmpty()
	@Column()
	organizationId: string;

	// @ManyToMany((type) => Employee, { cascade: ['update'] })
	// @JoinTable({
	// 	name: 'organization_team_employee'
	// })
	@OneToMany(
		(type) => OrganizationTeamsEmployee,
		(organizationTeamsEmployee) =>
			organizationTeamsEmployee.organizationTeams
	)
	members?: Employee[];
}
