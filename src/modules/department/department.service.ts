import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';

@Injectable()
export class DepartmentService {
  constructor(private prisma: PrismaService) {}

  async create(createDepartmentDto: CreateDepartmentDto) {
    return this.prisma.department.create({
      data: createDepartmentDto,
      include: {
        manager: true,
        employees: {
          include: {
            salaries: {
              orderBy: { effectiveDate: 'desc' },
              take: 1,
            },
          },
        },
        candidates: true,
      },
    });
  }

  async findAll() {
    return this.prisma.department.findMany({
      include: {
        manager: true,
        employees: {
          include: {
            salaries: {
              orderBy: { effectiveDate: 'desc' },
              take: 1,
            },
          },
        },
        _count: {
          select: {
            employees: true,
            candidates: true,
          },
        },
      },
      orderBy: { name: 'asc' },
    });
  }

  async findOne(id: number) {
    const department = await this.prisma.department.findUnique({
      where: { id },
      include: {
        manager: true,
        employees: {
          include: {
            salaries: {
              orderBy: { effectiveDate: 'desc' },
              take: 1,
            },
          },
        },
        candidates: true,
      },
    });

    if (!department) {
      throw new NotFoundException(`Department with ID ${id} not found`);
    }

    return department;
  }

  async update(id: number, updateDepartmentDto: UpdateDepartmentDto) {
    try {
      return await this.prisma.department.update({
        where: { id },
        data: updateDepartmentDto,
        include: {
          manager: true,
          employees: {
            include: {
              salaries: {
                orderBy: { effectiveDate: 'desc' },
                take: 1,
              },
            },
          },
        },
      });
    } catch {
      throw new NotFoundException(`Department with ID ${id} not found`);
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.department.delete({
        where: { id },
      });
    } catch {
      throw new NotFoundException(`Department with ID ${id} not found`);
    }
  }
  async findByManager(managerId: number) {
    return this.prisma.department.findMany({
      where: { managerId },
      include: {
        manager: true,
        employees: {
          include: {
            salaries: {
              orderBy: { effectiveDate: 'desc' },
              take: 1,
            },
          },
        },
      },
    });
  }

  async getDepartmentStats() {
    const departments = await this.prisma.department.findMany({
      include: {
        _count: {
          select: {
            employees: true,
            candidates: true,
          },
        },
        employees: {
          include: {
            salaries: {
              orderBy: { effectiveDate: 'desc' },
              take: 1,
            },
          },
        },
      },
    });
  
    return departments.map(dept => ({
      ...dept,
      totalSalary: dept.employees.reduce((sum, emp) => {
        const currentSalary = emp.salaries[0];
        return sum + (currentSalary?.grossAmount || 0);
      }, 0),
      avgSalary: dept.employees.length > 0 ? 
        dept.employees.reduce((sum, emp) => {
          const currentSalary = emp.salaries[0];
          return sum + (currentSalary?.grossAmount || 0);
        }, 0) / dept.employees.length : 0,
    }));
  }
}