import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';

@Injectable()
export class EmployeeService {
  constructor(private prisma: PrismaService) {}

  async create(createEmployeeDto: CreateEmployeeDto) {
    return this.prisma.employee.create({
      data: createEmployeeDto,
      include: {
        department: true,
        salaries: {
          orderBy: { effectiveDate: 'desc' },
          take: 1,
        },
        managedDepartments: true,
      },
    });
  }

  async findAll() {
    return this.prisma.employee.findMany({
      include: {
        department: true,
        salaries: {
          orderBy: { effectiveDate: 'desc' },
          take: 1,
        },
        managedDepartments: true,
      },
      orderBy: { name: 'asc' },
    });
  }

  async findOne(id: number) {
    const employee = await this.prisma.employee.findUnique({
      where: { id },
      include: {
        department: true,
        salaries: {
          orderBy: { effectiveDate: 'desc' },
        },
        managedDepartments: true,
        hiredCandidates: true,
      },
    });

    if (!employee) {
      throw new NotFoundException(`Employee with ID ${id} not found`);
    }

    return employee;
  }

  async update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    try {
      return await this.prisma.employee.update({
        where: { id },
        data: updateEmployeeDto,
        include: {
          department: true,
          salaries: {
            orderBy: { effectiveDate: 'desc' },
            take: 1,
          },
          managedDepartments: true,
        },
      });
    } catch {
      throw new NotFoundException(`Employee with ID ${id} not found.`);
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.employee.delete({
        where: { id },
      });
    } catch {
      throw new NotFoundException(`Employee with ID ${id} not found`);
    }
  }

  async getEmployeesByDepartment(departmentId: number) {
    return this.prisma.employee.findMany({
      where: { departmentId },
      include: {
        department: true,
        salaries: {
          orderBy: { effectiveDate: 'desc' },
          take: 1,
        },
      },
      orderBy: { name: 'asc' },
    });
  }
  async searchEmployees(query: string) {
    return this.prisma.employee.findMany({
      where: {
        OR: [
          { name: { contains: query, mode: 'insensitive' } },
          { email: { contains: query, mode: 'insensitive' } },
          { position: { contains: query, mode: 'insensitive' } },
        ],
      },
      include: {
        department: true,
        salaries: {
          orderBy: { effectiveDate: 'desc' },
          take: 1,
        },
      },
    });
  }
  async findByStatus(status: string) {
    return this.prisma.employee.findMany({
      where: { status },
      include: {
        department: true,
        salaries: {
          orderBy: { effectiveDate: 'desc' },
          take: 1,
        },
      },
    });
  }
}