import { OrganizationTeamsEmployee as IOrganizationTeamsEmployee } from '@gauzy/models';
import { Entity, Column, ManyToOne, JoinColumn, RelationId } from 'typeorm';
import { Base } from '../core/entities/base';
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';
import { OrganizationTeams } from '../organization-teams/organization-teams.entity';
import { Employee } from '../employee/employee.entity';
import { Role } from '../role/role.entity';

@Entity('organization_team_employee')
export class OrganizationTeamsEmployee extends Base
	implements IOrganizationTeamsEmployee {
	@ApiProperty({ type: String })
	@IsString()
	@IsNotEmpty()
	@Column()
	organizationTeamId!: string;

	@ApiProperty({ type: String })
	@IsString()
	@IsNotEmpty()
	@Column()
	employeeId!: string;

	@ManyToOne(
		(type) => OrganizationTeams,
		(organizationTeams) => organizationTeams.members,
		{
			cascade: true
		}
	)
	@JoinColumn({ name: 'organizationTeamId' })
	organizationTeams!: OrganizationTeams;

	@ManyToOne(
		(type) => Employee,
		(employee) => employee.teams,
		{
			cascade: true
		}
	)
	employee!: Employee;

	@ApiProperty({ type: String })
	@IsString()
	@ManyToOne((type) => Role, { nullable: true })
	@JoinColumn()
	role?: Role;

	@RelationId(
		(organizationTeamsEmployee: OrganizationTeamsEmployee) =>
			organizationTeamsEmployee.role
	)
	readonly roleId?: string;
}
