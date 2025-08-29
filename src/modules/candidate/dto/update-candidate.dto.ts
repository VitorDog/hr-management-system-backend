import { PartialType } from '@nestjs/mapped-types';
import { CreateCandidateDto } from './create-candidate.dto';
import { IsOptional, IsNumber, IsString, IsEmail, IsDateString } from 'class-validator';
import { Transform } from 'class-transformer';

export class UpdateCandidateDto extends PartialType(CreateCandidateDto) {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsOptional()
  @IsString()
  appliedPosition?: string;

  @IsOptional()
  @IsNumber()
  appliedDepartmentId?: number;

  @IsOptional()
  @IsString()
  resume?: string;

  @IsOptional()
  @IsString()
  status?: string;

  @IsOptional()
  @Transform(({ value }) => value ? new Date(value) : undefined)
  applicationDate?: Date;

  @IsOptional()
  @IsNumber()
  hiredEmployeeId?: number;
}