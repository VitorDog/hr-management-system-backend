import { PartialType } from '@nestjs/mapped-types';
import { CreateSalaryDto } from './create-salary.dto';
import { IsOptional, IsNumber, IsString, IsDateString } from 'class-validator';
import { Transform } from 'class-transformer';

export class UpdateSalaryDto extends PartialType(CreateSalaryDto) {
  @IsOptional()
  @IsNumber()
  employeeId?: number;

  @IsOptional()
  @IsNumber()
  baseAmount?: number;

  @IsOptional()
  @IsNumber()
  bonus?: number;

  @IsOptional()
  @IsNumber()
  grossAmount?: number;

  @IsOptional()
  @IsNumber()
  taxDeductions?: number;

  @IsOptional()
  @IsNumber()
  netAmount?: number;

  @IsOptional()
  @IsString()
  paymentFrequency?: string;

  @IsOptional()
  @Transform(({ value }) => value ? new Date(value) : undefined)
  effectiveDate?: Date;

  @IsOptional()
  @IsNumber()
  previousSalaryId?: number;

  @IsOptional()
  @IsString()
  adjustmentType?: string;

  @IsOptional()
  @IsString()
  notes?: string;
}