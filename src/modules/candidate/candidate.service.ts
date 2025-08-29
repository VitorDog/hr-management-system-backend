import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateCandidateDto } from './dto/create-candidate.dto';
import { UpdateCandidateDto } from './dto/update-candidate.dto';

@Injectable()
export class CandidateService {
  constructor(private prisma: PrismaService) {}

  async create(createCandidateDto: CreateCandidateDto) {
    const { appliedDepartmentId, hiredEmployeeId, ...candidateData } = createCandidateDto;
    
    return this.prisma.candidate.create({
      data: {
        ...candidateData,
        department: appliedDepartmentId ? {
          connect: { id: appliedDepartmentId }
        } : undefined,
        hiredEmployee: hiredEmployeeId ? {
          connect: { id: hiredEmployeeId }
        } : undefined,
      },
      include: {
        department: true,
        hiredEmployee: true,
      },
    });
  }

  async findAll() {
    return this.prisma.candidate.findMany({
      include: {
        department: true,
        hiredEmployee: true,
      },
      orderBy: { applicationDate: 'desc' },
    });
  }

  async findOne(id: number) {
    const candidate = await this.prisma.candidate.findUnique({
      where: { id },
      include: {
        department: true,
        hiredEmployee: {
          include: {
            department: true,
          },
        },
      },
    });

    if (!candidate) {
      throw new NotFoundException(`Candidate with ID ${id} not found`);
    }

    return candidate;
  }

  async update(id: number, updateCandidateDto: UpdateCandidateDto) {
    try {
      return await this.prisma.candidate.update({
        where: { id },
        data: updateCandidateDto,
        include: {
          department: true,
          hiredEmployee: true,
        },
      });
    } catch {
      throw new NotFoundException(`Candidate with ID ${id} not found`);
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.candidate.delete({
        where: { id },
      });
    } catch {
      throw new NotFoundException(`Candidate with ID ${id} not found`);
    }
  }

  async updateStatus(id: number, status: string) {
    try {
      return await this.prisma.candidate.update({
        where: { id },
        data: { status },
        include: {
          department: true,
          hiredEmployee: true,
        },
      });
    } catch {
      throw new NotFoundException(`Candidate with ID ${id} not found`);
    }
  }

  async hireCandidate(id: number, employeeData: any) {
    // Create employee from candidate
    const employee = await this.prisma.employee.create({
      data: {
        name: employeeData.name,
        email: employeeData.email,
        phoneNumber: employeeData.phone,
        dateOfBirth: employeeData.dateOfBirth,
        address: employeeData.address,
        emergencyContact: employeeData.emergencyContact,
        emergencyContactPhone: employeeData.emergencyContactPhone,
        position: employeeData.position,
        departmentId: employeeData.departmentId,
        hireDate: new Date(),
      },
    });

    // Update candidate with hired employee reference
    return await this.prisma.candidate.update({
      where: { id },
      data: {
        status: 'Hired',
        hiredEmployeeId: employee.id,
      },
      include: {
        department: true,
        hiredEmployee: true,
      },
    });
  }
  
  async findByStatus(status: string) {
    return this.prisma.candidate.findMany({
      where: { status },
      include: {
        department: true,
        hiredEmployee: true,
      },
      orderBy: { applicationDate: 'desc' },
    });
  }

  async findByDepartment(departmentId: number) {
    return this.prisma.candidate.findMany({
      where: { appliedDepartmentId: departmentId },
      include: {
        department: true,
        hiredEmployee: true,
      },
      orderBy: { applicationDate: 'desc' },
    });
  }
}