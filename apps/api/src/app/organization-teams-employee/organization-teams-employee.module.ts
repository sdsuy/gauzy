import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrganizationTeamsEmployee } from './organization-teams-employee.entity';
import { OrganizationTeamsEmployeeService } from './organization-teams-employee.service';

@Module({
	imports: [TypeOrmModule.forFeature([OrganizationTeamsEmployee])],
	providers: [OrganizationTeamsEmployeeService],
	exports: [OrganizationTeamsEmployeeService]
})
export class OrganizationTeamsEmployeeModule {}
