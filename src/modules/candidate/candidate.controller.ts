import { 
  Controller, 
  Get, 
  Post, 
  Body, 
  Patch, 
  Param, 
  Delete, 
  ParseIntPipe,
  Put 
} from '@nestjs/common';
import { CandidateService } from './candidate.service';
import { CreateCandidateDto } from './dto/create-candidate.dto';
import { UpdateCandidateDto } from './dto/update-candidate.dto';

@Controller('candidates')
export class CandidateController {
  constructor(private readonly candidateService: CandidateService) {}

  @Post()
  create(@Body() createCandidateDto: CreateCandidateDto) {
    return this.candidateService.create(createCandidateDto);
  }

  @Get()
  findAll() {
    return this.candidateService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.candidateService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCandidateDto: UpdateCandidateDto,
  ) {
    return this.candidateService.update(id, updateCandidateDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.candidateService.remove(id);
  }

  @Put(':id/status/:status')
  updateStatus(
    @Param('id', ParseIntPipe) id: number,
    @Param('status') status: string,
  ) {
    return this.candidateService.updateStatus(id, status);
  }

  @Post(':id/hire')
  hireCandidate(
    @Param('id', ParseIntPipe) id: number,
    @Body() employeeData: any,
  ) {
    return this.candidateService.hireCandidate(id, employeeData);
  }

  @Get('status/:status')
  findByStatus(@Param('status') status: string) {
    return this.candidateService.findByStatus(status);
  }

  @Get('department/:departmentId')
  findByDepartment(@Param('departmentId', ParseIntPipe) departmentId: number) {
    return this.candidateService.findByDepartment(departmentId);
  }
}