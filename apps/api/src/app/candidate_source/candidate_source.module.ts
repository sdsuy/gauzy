import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { CandidateSourceService } from './candidate_source.service';
import { CandidateSourceController } from './candidate_source.controller';
import { CandidateSource } from './candidate_source.entity';

@Module({
	imports: [TypeOrmModule.forFeature([CandidateSource])],
	providers: [CandidateSourceService],
	controllers: [CandidateSourceController],
	exports: [CandidateSourceService]
})
export class CandidateSourceModule {}
