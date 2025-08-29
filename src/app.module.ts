import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { EmployeeModule } from './modules/employee/employee.module';
import { DepartmentModule } from './modules/department/department.module';
import { SalaryModule } from './modules/salary/salary.module';
import { CandidateModule } from './modules/candidate/candidate.module';

@Module({
  imports: [PrismaModule, EmployeeModule, DepartmentModule, SalaryModule, CandidateModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
