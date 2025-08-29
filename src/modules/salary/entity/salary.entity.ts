export class Salary {
  id: number;
  employeeId: number;
  baseAmount: number;
  bonus?: number;
  grossAmount: number;
  taxDeductions: number;
  netAmount: number;
  paymentFrequency: string;
  effectiveDate: Date;
  previousSalaryId?: number;
  adjustmentType?: string;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}