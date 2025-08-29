import { Module } from '@nestjs/common';
import { CandidateService } from './candidate.service';
import { CandidateController } from './candidate.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [CandidateService],
  controllers: [CandidateController],
  exports: [CandidateService]
})
export class CandidateModule {}
