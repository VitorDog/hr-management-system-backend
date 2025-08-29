import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateSalaryDto } from './dto/create-salary.dto';
import { UpdateSalaryDto } from './dto/update-salary.dto'

@Injectable()
export class SalaryService {
  constructor(private prisma: PrismaService) {}

  async create(createSalaryDto: CreateSalaryDto) {
    return this.prisma.salary.create({
      data: createSalaryDto,
      include: {
        employee: {
          include: {
            department: true,
          },
        },
        previousSalary: true,
        nextSalaries: true,
      },
    });
  }

  async findAll() {
    return this.prisma.salary.findMany({
      include: {
        employee: {
          include: {
            department: true,
          },
        },
      },
      orderBy: { effectiveDate: 'desc' },
    });
  }

  async findOne(id: number) {
    const salary = await this.prisma.salary.findUnique({
      where: { id },
      include: {
        employee: {
          include: {
            department: true,
          },
        },
        previousSalary: true,
        nextSalaries: {
          include: {
            employee: true,
          },
        },
      },
    });

    if (!salary) {
      throw new NotFoundException(`Salary with ID ${id} not found`);
    }

    return salary;
  }

  async update(id: number, updateSalaryDto: UpdateSalaryDto) {
    try {
      return await this.prisma.salary.update({
        where: { id },
        data: updateSalaryDto,
        include: {
          employee: {
            include: {
              department: true,
            },
          },
        },
      });
    } catch {
      throw new NotFoundException(`Salary with ID ${id} not found`);
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.salary.delete({
        where: { id },
      });
    } catch {
      throw new NotFoundException(`Salary with ID ${id} not found`);
    }
  }

  async getSalariesByEmployee(employeeId: number) {
    return this.prisma.salary.findMany({
      where: { employeeId },
      include: {
        employee: true,
      },
      orderBy: { effectiveDate: 'desc' },
    });
  }

  async getCurrentSalary(employeeId: number) {
    return this.prisma.salary.findFirst({
      where: { employeeId },
      orderBy: { effectiveDate: 'desc' },
      include: {
        employee: true,
      },
    });
  }

  async getSalaryStats() {
    const salaries = await this.prisma.salary.findMany({
      include: {
        employee: {
          include: {
            department: true,
          },
        },
      },
      orderBy: { effectiveDate: 'desc' },
    });

    const currentSalaries = salaries.filter((salary, index, arr) => 
      arr.findIndex(s => s.employeeId === salary.employeeId) === index
    );

    const stats = {
      totalEmployees: currentSalaries.length,
      totalMonthlySalary: currentSalaries.reduce((sum, salary) => sum + salary.grossAmount, 0),
      avgSalary: currentSalaries.length > 0 ? 
        currentSalaries.reduce((sum, salary) => sum + salary.grossAmount, 0) / currentSalaries.length : 0,
      byDepartment: {} as Record<string, number>,
    };

    currentSalaries.forEach(salary => {
      const deptName = salary.employee.department?.name || 'No Department';
      stats.byDepartment[deptName] = (stats.byDepartment[deptName] || 0) + salary.grossAmount;
    });

    return stats;
  }

  async getSalariesByDepartment(departmentId: number) {
    return this.prisma.salary.findMany({
      where: {
        employee: {
          departmentId: departmentId,
        },
      },
      include: {
        employee: true,
      },
      orderBy: { effectiveDate: 'desc' },
    });
  }
}