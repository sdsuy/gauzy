import { Connection } from 'typeorm';
import { Employee } from '../employee/employee.entity';
import { environment as env } from '@env-api/environment';
import { OrganizationTeams } from './organization-teams.entity';
import { Organization } from '../organization/organization.entity';
import { OrganizationTeamsEmployee } from '../organization-teams-employee/organization-teams-employee.entity';

export const createTeams = async (
	connection: Connection,
	organization: Organization,
	employees: Employee[]
): Promise<OrganizationTeams[]> => {
	const teams = env.defaultTeams || [];

	const organizationTeams = [];
	for (let i = 0; i < teams.length; i++) {
		const team = new OrganizationTeams();
		team.name = teams[i].name;
		team.organizationId = organization.id;
		team.members = employees.filter(
			(e) => (teams[i].defaultMembers || []).indexOf(e.user.email) > -1
		);

		const newTeam = await insertOrganizationTeam(connection, team);
		organizationTeams.push(newTeam);
	}

	organizationTeams.forEach((team) => {
		const teamEmployee = new OrganizationTeamsEmployee();
		teamEmployee.organizationTeams = team;
		teamEmployee.organizationTeamId = team.organizationTeamId;
		team.members.forEach((member) => {
			teamEmployee.employee = member;
			teamEmployee.employeeId = member.id;
			insertOrganizationTeamEmployee(connection, teamEmployee);
		});
	});

	return organizationTeams;
};

const insertOrganizationTeam = async (
	connection: Connection,
	team: OrganizationTeams
): Promise<OrganizationTeams> => {
	return await connection.manager.save(team);
};

const insertOrganizationTeamEmployee = async (
	connection: Connection,
	teamEmployee: OrganizationTeamsEmployee
): Promise<void> => {
	await connection
		.createQueryBuilder()
		.insert()
		.into(OrganizationTeamsEmployee)
		.values(teamEmployee)
		.execute();
};
