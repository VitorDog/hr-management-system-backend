import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting seed data creation...');

  // Clear existing data
  await prisma.salary.deleteMany();
  await prisma.candidate.deleteMany();
  await prisma.employee.deleteMany();
  await prisma.department.deleteMany();

  // 1. Create Departments
  console.log('Creating departments...');
  const departments = await prisma.department.createMany({
    data: [
      {
        name: 'Human Resources',
        location: 'Floor 1, Building A',
        budget: 750000,
        description: 'Handles recruitment, employee relations, and benefits administration'
      },
      {
        name: 'Information Technology',
        location: 'Floor 2, Building A',
        budget: 1200000,
        description: 'Manages technology infrastructure, software development, and IT support'
      },
      {
        name: 'Finance & Accounting',
        location: 'Floor 3, Building A',
        budget: 850000,
        description: 'Responsible for financial planning, budgeting, and accounting operations'
      },
      {
        name: 'Marketing & Sales',
        location: 'Floor 1, Building B',
        budget: 950000,
        description: 'Handles brand management, advertising, and sales strategies'
      },
      {
        name: 'Operations',
        location: 'Floor 2, Building B',
        budget: 1100000,
        description: 'Manages daily business operations, logistics, and supply chain'
      },
      {
        name: 'Research & Development',
        location: 'Floor 3, Building B',
        budget: 1500000,
        description: 'Focuses on product innovation and technological advancement'
      }
    ],
  });

  const departmentRecords = await prisma.department.findMany();

  // 2. Create 20 Employees
  console.log('Creating 20 employees...');
  const employees = await prisma.employee.createMany({
    data: [  
      // HR Department (4 employees)
      {
        name: 'Sarah Johnson',
        email: 'sarah.johnson@company.com',
        departmentId: departmentRecords[0].id,
        phoneNumber: '+1-555-0101',
        address: '123 Oak Street, New York, NY',
        dateOfBirth: new Date('1985-03-15'),
        position: 'HR Director',
        hireDate: new Date('2020-01-15'),
        emergencyContact: 'Michael Johnson',
        emergencyContactPhone: '+1-555-0102',
        employmentType: 'Full-Time',
        status: 'Active'
      },
      {
        name: 'David Chen',
        email: 'david.chen@company.com',
        departmentId: departmentRecords[0].id,
        phoneNumber: '+1-555-0103',
        address: '456 Pine Avenue, Chicago, IL',
        dateOfBirth: new Date('1990-08-22'),
        position: 'HR Manager',
        hireDate: new Date('2021-03-10'),
        emergencyContact: 'Lisa Chen',
        emergencyContactPhone: '+1-555-0104',
        employmentType: 'Full-Time',
        status: 'Active'
      },
      {
        name: 'Emily Rodriguez',
        email: 'emily.rodriguez@company.com',
        departmentId: departmentRecords[0].id,
        phoneNumber: '+1-555-0105',
        address: '789 Elm Road, Los Angeles, CA',
        dateOfBirth: new Date('1992-11-30'),
        position: 'Recruitment Specialist',
        hireDate: new Date('2022-06-15'),
        emergencyContact: 'Carlos Rodriguez',
        emergencyContactPhone: '+1-555-0106',
        employmentType: 'Full-Time',
        status: 'Active'
      },
      {
        name: 'Marcus Thompson',
        email: 'marcus.thompson@company.com',
        departmentId: departmentRecords[0].id,
        phoneNumber: '+1-555-0107',
        address: '321 Maple Lane, Houston, TX',
        dateOfBirth: new Date('1988-04-18'),
        position: 'Benefits Administrator',
        hireDate: new Date('2021-09-20'),
        emergencyContact: 'Jessica Thompson',
        emergencyContactPhone: '+1-555-0108',
        employmentType: 'Full-Time',
        status: 'Active'
      },

      // IT Department (4 employees)
      {
        name: 'Michael Zhang',
        email: 'michael.zhang@company.com',
        departmentId: departmentRecords[1].id,
        phoneNumber: '+1-555-0109',
        address: '654 Cedar Street, San Francisco, CA',
        dateOfBirth: new Date('1988-12-10'),
        position: 'IT Director',
        hireDate: new Date('2019-05-20'),
        emergencyContact: 'Sophia Zhang',
        emergencyContactPhone: '+1-555-0110',
        employmentType: 'Full-Time',
        status: 'Active'
      },
      {
        name: 'Jennifer Kim',
        email: 'jennifer.kim@company.com',
        departmentId: departmentRecords[1].id,
        phoneNumber: '+1-555-0111',
        address: '987 Birch Avenue, Seattle, WA',
        dateOfBirth: new Date('1991-07-25'),
        position: 'Senior Software Engineer',
        hireDate: new Date('2020-08-15'),
        emergencyContact: 'Daniel Kim',
        emergencyContactPhone: '+1-555-0112',
        employmentType: 'Full-Time',
        status: 'Active'
      },
      {
        name: 'Robert Wilson',
        email: 'robert.wilson@company.com',
        departmentId: departmentRecords[1].id,
        phoneNumber: '+1-555-0113',
        address: '147 Walnut Drive, Austin, TX',
        dateOfBirth: new Date('1993-02-14'),
        position: 'DevOps Engineer',
        hireDate: new Date('2022-01-10'),
        emergencyContact: 'Amanda Wilson',
        emergencyContactPhone: '+1-555-0114',
        employmentType: 'Full-Time',
        status: 'Active'
      },
      {
        name: 'Lisa Patel',
        email: 'lisa.patel@company.com',
        departmentId: departmentRecords[1].id,
        phoneNumber: '+1-555-0115',
        address: '258 Spruce Court, Boston, MA',
        dateOfBirth: new Date('1990-09-08'),
        position: 'UX Designer',
        hireDate: new Date('2021-11-30'),
        emergencyContact: 'Raj Patel',
        emergencyContactPhone: '+1-555-0116',
        employmentType: 'Full-Time',
        status: 'Active'
      },

      // Finance Department (3 employees)
      {
        name: 'James Anderson',
        email: 'james.anderson@company.com',
        departmentId: departmentRecords[2].id,
        phoneNumber: '+1-555-0117',
        address: '369 Oakwood Drive, Miami, FL',
        dateOfBirth: new Date('1987-07-30'),
        position: 'Finance Director',
        hireDate: new Date('2018-11-05'),
        emergencyContact: 'Sarah Anderson',
        emergencyContactPhone: '+1-555-0118',
        employmentType: 'Full-Time',
        status: 'Active'
      },
      {
        name: 'Maria Garcia',
        email: 'maria.garcia@company.com',
        departmentId: departmentRecords[2].id,
        phoneNumber: '+1-555-0119',
        address: '741 Palm Street, Phoenix, AZ',
        dateOfBirth: new Date('1992-12-20'),
        position: 'Senior Accountant',
        hireDate: new Date('2020-04-12'),
        emergencyContact: 'Juan Garcia',
        emergencyContactPhone: '+1-555-0120',
        employmentType: 'Full-Time',
        status: 'Active'
      },
      {
        name: 'Thomas Brown',
        email: 'thomas.brown@company.com',
        departmentId: departmentRecords[2].id,
        phoneNumber: '+1-555-0121',
        address: '852 Willow Way, Denver, CO',
        dateOfBirth: new Date('1989-05-17'),
        position: 'Financial Analyst',
        hireDate: new Date('2021-07-22'),
        emergencyContact: 'Emily Brown',
        emergencyContactPhone: '+1-555-0122',
        employmentType: 'Full-Time',
        status: 'Active'
      },

      // Marketing Department (3 employees)
      {
        name: 'Amanda Lee',
        email: 'amanda.lee@company.com',
        departmentId: departmentRecords[3].id,
        phoneNumber: '+1-555-0123',
        address: '963 Magnolia Ave, Atlanta, GA',
        dateOfBirth: new Date('1990-08-14'),
        position: 'Marketing Director',
        hireDate: new Date('2019-09-18'),
        emergencyContact: 'Brian Lee',
        emergencyContactPhone: '+1-555-0124',
        employmentType: 'Full-Time',
        status: 'Active'
      },
      {
        name: 'Christopher Taylor',
        email: 'christopher.taylor@company.com',
        departmentId: departmentRecords[3].id,
        phoneNumber: '+1-555-0125',
        address: '159 Redwood Road, Dallas, TX',
        dateOfBirth: new Date('1993-03-22'),
        position: 'Digital Marketing Specialist',
        hireDate: new Date('2022-02-28'),
        emergencyContact: 'Olivia Taylor',
        emergencyContactPhone: '+1-555-0126',
        employmentType: 'Full-Time',
        status: 'Active'
      },
      {
        name: 'Jessica Martinez',
        email: 'jessica.martinez@company.com',
        departmentId: departmentRecords[3].id,
        phoneNumber: '+1-555-0127',
        address: '357 Sequoia Lane, San Diego, CA',
        dateOfBirth: new Date('1991-06-11'),
        position: 'Content Strategist',
        hireDate: new Date('2021-05-09'),
        emergencyContact: 'Carlos Martinez',
        emergencyContactPhone: '+1-555-0128',
        employmentType: 'Full-Time',
        status: 'Active'
      },

      // Operations Department (3 employees)
      {
        name: 'Daniel Clark',
        email: 'daniel.clark@company.com',
        departmentId: departmentRecords[4].id,
        phoneNumber: '+1-555-0129',
        address: '468 Sycamore Street, Portland, OR',
        dateOfBirth: new Date('1988-10-05'),
        position: 'Operations Director',
        hireDate: new Date('2018-07-15'),
        emergencyContact: 'Rachel Clark',
        emergencyContactPhone: '+1-555-0130',
        employmentType: 'Full-Time',
        status: 'Active'
      },
      {
        name: 'Sophia White',
        email: 'sophia.white@company.com',
        departmentId: departmentRecords[4].id,
        phoneNumber: '+1-555-0131',
        address: '579 Aspen Court, Las Vegas, NV',
        dateOfBirth: new Date('1992-01-28'),
        position: 'Logistics Manager',
        hireDate: new Date('2020-10-22'),
        emergencyContact: 'Matthew White',
        emergencyContactPhone: '+1-555-0132',
        employmentType: 'Full-Time',
        status: 'Active'
      },
      {
        name: 'Kevin Harris',
        email: 'kevin.harris@company.com',
        departmentId: departmentRecords[4].id,
        phoneNumber: '+1-555-0133',
        address: '690 Birchwood Drive, Orlando, FL',
        dateOfBirth: new Date('1989-11-15'),
        position: 'Supply Chain Analyst',
        hireDate: new Date('2021-12-03'),
        emergencyContact: 'Nicole Harris',
        emergencyContactPhone: '+1-555-0134',
        employmentType: 'Full-Time',
        status: 'Active'
      },

      // R&D Department (3 employees)
      {
        name: 'Brian Johnson',
        email: 'brian.johnson@company.com',
        departmentId: departmentRecords[5].id,
        phoneNumber: '+1-555-0135',
        address: '801 Chestnut Ave, Raleigh, NC',
        dateOfBirth: new Date('1986-04-12'),
        position: 'R&D Director',
        hireDate: new Date('2017-12-01'),
        emergencyContact: 'Michelle Johnson',
        emergencyContactPhone: '+1-555-0136',
        employmentType: 'Full-Time',
        status: 'Active'
      },
      {
        name: 'Olivia Davis',
        email: 'olivia.davis@company.com',
        departmentId: departmentRecords[5].id,
        phoneNumber: '+1-555-0137',
        address: '912 Poplar Street, Nashville, TN',
        dateOfBirth: new Date('1990-07-19'),
        position: 'Senior Research Scientist',
        hireDate: new Date('2019-08-14'),
        emergencyContact: 'Andrew Davis',
        emergencyContactPhone: '+1-555-0138',
        employmentType: 'Full-Time',
        status: 'Active'
      },
      {
        name: 'Ethan Miller',
        email: 'ethan.miller@company.com',
        departmentId: departmentRecords[5].id,
        phoneNumber: '+1-555-0139',
        address: '123 Fir Lane, Salt Lake City, UT',
        dateOfBirth: new Date('1993-09-25'),
        position: 'Product Development Engineer',
        hireDate: new Date('2022-03-17'),
        emergencyContact: 'Hannah Miller',
        emergencyContactPhone: '+1-555-0140',
        employmentType: 'Full-Time',
        status: 'Active'
      }
    ]
  });  

  const employeeRecords = await prisma.employee.findMany();

  // 3. Update Departments with Managers
  console.log('Assigning department managers...');
  await prisma.department.update({
    where: { id: departmentRecords[0].id },
    data: { managerId: employeeRecords[0].id } // HR Director
  });

  await prisma.department.update({
    where: { id: departmentRecords[1].id },
    data: { managerId: employeeRecords[4].id } // IT
  });

  await prisma.department.update({
    where: { id: departmentRecords[2].id },
    data: { managerId: employeeRecords[8].id } // Finance
  });

  await prisma.department.update({
    where: { id: departmentRecords[3].id },
    data: { managerId: employeeRecords[11].id } // Marketing
  });

  await prisma.department.update({
    where: { id: departmentRecords[4].id },
    data: { managerId: employeeRecords[14].id } // Operations
  });

  await prisma.department.update({
    where: { id: departmentRecords[5].id },
    data: { managerId: employeeRecords[17].id } // R&D
  });

  // 4. Create Salaries for All Employees
  console.log('Creating salaries for 20 employees...');
  const salaryData = employeeRecords.map((employee, index) => {
    const baseAmounts = [95000, 75000, 65000, 85000, 110000, 95000, 85000, 80000, 100000, 75000, 70000, 105000, 65000, 60000, 115000, 80000, 75000, 120000, 90000, 85000];
    const bonuses = [10000, 5000, 3000, 7000, 15000, 8000, 6000, 5000, 12000, 4000, 3500, 10000, 3000, 2500, 18000, 6000, 5000, 20000, 10000, 7000];
    
    const baseAmount = baseAmounts[index];
    const bonus = bonuses[index];
    const grossAmount = baseAmount + bonus;
    const taxDeductions = grossAmount * 0.2;
    const netAmount = grossAmount - taxDeductions;

    return {
      employeeId: employee.id,
      baseAmount,
      bonus,
      grossAmount,
      taxDeductions,
      netAmount,
      paymentFrequency: 'Monthly',
      effectiveDate: new Date('2024-01-01'),
      adjustmentType: 'raise',
      notes: `Annual salary adjustment for ${employee.name}`
    };
  });

  await prisma.salary.createMany({
    data: salaryData
  });

  // 5. Create 10 Candidates
  console.log('Creating 10 candidates...');
  const candidates = await prisma.candidate.createMany({
    data: [
      {
        name: 'Jennifer Lopez',
        email: 'jennifer.lopez@email.com',
        phone: '+1-555-0201',
        appliedPosition: 'HR Specialist',
        appliedDepartmentId: departmentRecords[0].id,
        resume: 'https://storage.example.com/resumes/jennifer-lopez.pdf',
        status: 'Interviewed',
        applicationDate: new Date('2024-01-15')
      },
      {
        name: 'Brian Smith',
        email: 'brian.smith@email.com',
        phone: '+1-555-0202',
        appliedPosition: 'Software Developer',
        appliedDepartmentId: departmentRecords[1].id,
        resume: 'https://storage.example.com/resumes/brian-smith.pdf',
        status: 'Applied',
        applicationDate: new Date('2024-01-20')
      },
      {
        name: 'Amanda Wilson',
        email: 'amanda.wilson@email.com',
        phone: '+1-555-0203',
        appliedPosition: 'Financial Analyst',
        appliedDepartmentId: departmentRecords[2].id,
        resume: 'https://storage.example.com/resumes/amanda-wilson.pdf',
        status: 'Hired',
        applicationDate: new Date('2024-01-10'),
        hiredEmployeeId: employeeRecords[10].id
      },
      {
        name: 'Kevin Brown',
        email: 'kevin.brown@email.com',
        phone: '+1-555-0204',
        appliedPosition: 'Marketing Coordinator',
        appliedDepartmentId: departmentRecords[3].id,
        resume: 'https://storage.example.com/resumes/kevin-brown.pdf',
        status: 'Rejected',
        applicationDate: new Date('2024-01-18')
      },
      {
        name: 'Maria Garcia',
        email: 'maria.garcia@email.com',
        phone: '+1-555-0205',
        appliedPosition: 'Operations Assistant',
        appliedDepartmentId: departmentRecords[4].id,
        resume: 'https://storage.example.com/resumes/maria-garcia.pdf',
        status: 'Interviewed',
        applicationDate: new Date('2024-01-22')
      },
      {
        name: 'David Kim',
        email: 'david.kim@email.com',
        phone: '+1-555-0206',
        appliedPosition: 'Research Scientist',
        appliedDepartmentId: departmentRecords[5].id,
        resume: 'https://storage.example.com/resumes/david-kim.pdf',
        status: 'Applied',
        applicationDate: new Date('2024-01-25')
      },
      {
        name: 'Sarah Thompson',
        email: 'sarah.thompson@email.com',
        phone: '+1-555-0207',
        appliedPosition: 'UX Designer',
        appliedDepartmentId: departmentRecords[1].id,
        resume: 'https://storage.example.com/resumes/sarah-thompson.pdf',
        status: 'Interviewed',
        applicationDate: new Date('2024-01-28')
      },
      {
        name: 'Michael Chen',
        email: 'michael.chen@email.com',
        phone: '+1-555-0208',
        appliedPosition: 'Accountant',
        appliedDepartmentId: departmentRecords[2].id,
        resume: 'https://storage.example.com/resumes/michael-chen.pdf',
        status: 'Applied',
        applicationDate: new Date('2024-01-30')
      },
      {
        name: 'Emily Davis',
        email: 'emily.davis@email.com',
        phone: '+1-555-0209',
        appliedPosition: 'Content Writer',
        appliedDepartmentId: departmentRecords[3].id,
        resume: 'https://storage.example.com/resumes/emily-davis.pdf',
        status: 'Rejected',
        applicationDate: new Date('2024-02-01')
      },
      {
        name: 'Christopher Martinez',
        email: 'christopher.martinez@email.com',
        phone: '+1-555-0210',
        appliedPosition: 'Logistics Coordinator',
        appliedDepartmentId: departmentRecords[4].id,
        resume: 'https://storage.example.com/resumes/christopher-martinez.pdf',
        status: 'Hired',
        applicationDate: new Date('2024-02-03'),
        hiredEmployeeId: employeeRecords[15].id
      }
    ],
  });

  console.log('✅ Seed data created successfully!');
  console.log(`📊 Departments: ${departmentRecords.length}`);
  console.log(`👥 Employees: ${employeeRecords.length}`);
  console.log(`💰 Salaries: ${salaryData.length}`);
  console.log(`📝 Candidates: ${candidates.count}`);
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });