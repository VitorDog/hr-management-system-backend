export class Department {
  id: number;
  name: string;
  location: string;
  budget?: number;
  managerId?: number;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
}