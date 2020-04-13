import { Module } from '@nestjs/common';
import { CandidateCVService } from './candidate_cv.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CandidateCv } from './candidate_cv.entity';
import { CandidateCVController } from './candidate_cv.controller';
import { CqrsModule } from '@nestjs/cqrs/dist/cqrs.module';

@Module({
	imports: [TypeOrmModule.forFeature([CandidateCv]), CqrsModule],
	providers: [CandidateCVService],
	controllers: [CandidateCVController],
	exports: [CandidateCVService]
})
export class CandidateCVModule {}
