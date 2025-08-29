import { IsNumber, IsString, IsDateString, IsOptional } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateSalaryDto {
  @IsNumber()
  employeeId: number;

  @IsNumber()
  baseAmount: number;

  @IsOptional()
  @IsNumber()
  bonus?: number;

  @IsNumber()
  grossAmount: number;

  @IsNumber()
  taxDeductions: number;

  @IsNumber()
  netAmount: number;

  @IsString()
  paymentFrequency: string;

  @Transform(({ value }) => value ? new Date(value) : undefined)
  effectiveDate: Date;

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