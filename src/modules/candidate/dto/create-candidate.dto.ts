import { IsString, IsEmail, IsOptional, IsNumber, IsDateString } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateCandidateDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  phone: string;

  @IsString()
  appliedPosition: string;

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