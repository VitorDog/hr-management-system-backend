import { 
  Controller, 
  Get, 
  Post, 
  Body, 
  Patch, 
  Param, 
  Delete, 
  ParseIntPipe,
  Query 
} from '@nestjs/common';
import { SalaryService } from './salary.service';
import { CreateSalaryDto } from './dto/create-salary.dto';
import { UpdateSalaryDto } from './dto/update-salary.dto';

@Controller('salaries')
export class SalaryController {
  constructor(private readonly salaryService: SalaryService) {}

  @Post()
  create(@Body() createSalaryDto: CreateSalaryDto) {
    return this.salaryService.create(createSalaryDto);
  }

  @Get()
  findAll() {
    return this.salaryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.salaryService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateSalaryDto: UpdateSalaryDto,
  ) {
    return this.salaryService.update(id, updateSalaryDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.salaryService.remove(id);
  }

  @Get('employee/:employeeId')
  getSalariesByEmployee(@Param('employeeId', ParseIntPipe) employeeId: number) {
    return this.salaryService.getSalariesByEmployee(employeeId);
  }

  @Get('employee/:employeeId/current')
  getCurrentSalary(@Param('employeeId', ParseIntPipe) employeeId: number) {
    return this.salaryService.getCurrentSalary(employeeId);
  }

  @Get('stats/summary')
  getSalaryStats() {
    return this.salaryService.getSalaryStats();
  }

  @Get('department/:departmentId')
  getSalariesByDepartment(@Param('departmentId', ParseIntPipe) departmentId: number) {
    return this.salaryService.getSalariesByDepartment(departmentId);
  }
}