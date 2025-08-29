export class Employee {
  id: number;
  name: string;
  email: string;
  departmentId?: number;
  phoneNumber?: string;
  address?: string;
  dateOfBirth?: Date;
  position?: string;
  hireDate?: Date;
  emergencyContact?: string;
  emergencyContactPhone?: string;
  employmentType?: string;
  status?: string;
  createdAt: Date;
  updatedAt: Date;
}