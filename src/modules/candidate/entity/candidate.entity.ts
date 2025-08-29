export class Candidate {
  id: number;
  name: string;
  email: string;
  phone: string;
  appliedPosition: string;
  appliedDepartmentId?: number;
  resume?: string;
  status: string;
  applicationDate: Date;
  hiredEmployeeId?: number;
  createdAt: Date;
  updatedAt: Date;
}