import { IsString, IsEmail, IsOptional, IsNumber, IsDateString, IsDate } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateEmployeeDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsOptional()
  @IsNumber()
  departmentId?: number;

  @IsOptional()
  @IsString()
  phoneNumber?: string;

  @IsOptional()
  @IsString()
  address?: string;

  @IsOptional()
  @Transform(({ value }) => value ? new Date(value) : undefined)
  dateOfBirth?: Date;

  @IsOptional()
  @IsString()
  position?: string;

  @IsOptional()
  @Transform(({ value }) => value ? new Date(value) : undefined)
  hireDate?: Date;

  @IsOptional()
  @IsString()
  emergencyContact?: string;

  @IsOptional()
  @IsString()
  emergencyContactPhone?: string;

  @IsOptional()
  @IsString()
  employmentType?: string;

  @IsOptional()
  @IsString()
  status?: string;
}