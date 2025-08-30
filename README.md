# HR Management System - Backend
![NodeJs](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![NestJs](https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)
![Postgres](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)
![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white)

A robust RESTful API backend for a Human Resources Management System built with NestJS, Prisma, and PostgreSQL. This backend powers the HR management system with complete CRUD operations for employees, departments, candidates, and salary management.

## 🚀 Live Deployment
Backend Applicatin: Deployed on Render

Frontend Application: Deployed on Netlify, check it out here [Demo Link](https://office-hr-management.netlify.app/dashboard)

## 🛠️ Tech Stack
Framework: NestJS 8

Database: PostgreSQL with Supabase

ORM: Prisma

Deployment: Render

Package Manager: npm

## 📊 API Endpoints
### Employees
```
GET /employees - Get all employees

GET /employees/:id - Get employee by ID

POST /employees - Create new employee

PUT /employees/:id - Update employee

DELETE /employees/:id - Delete employee
```

### Departments
```
GET /departments - Get all departments

GET /departments/:id - Get department by ID

POST /departments - Create new department

PUT /departments/:id - Update department

DELETE /departments/:id - Delete department
```
### Candidates
```
GET /candidates - Get all candidates

GET /candidates/:id - Get candidate by ID

POST /candidates - Create new candidate

PUT /candidates/:id - Update candidate

POST /candidates/:id/hire - Hire candidate (creates employee)
```

### Salaries
```
GET /salaries - Get all salaries

GET /salaries/:id - Get salary by ID

POST /salaries - Create new salary record

PUT /salaries/:id - Update salary record

DELETE /salaries/:id - Delete salary record
```

## 🗄️ Database Schema
The system uses PostgreSQL with the following main tables:

employees - Employee records with personal and employment information

departments - Department information and management

candidates - Job applicant tracking

salaries - Employee compensation records

## 🚀 Getting Started
Prerequisites
Node.js 16+

PostgreSQL database

npm or yarn

### Installation
1. Clone the repository
```bash
git clone https://github.com/hadush-negasi/hr-management-system-backend.git
cd hr-management-system-backend
```
2. Install Dependencies
```bash
npm install
```
3. Create Supabase Database

    Go to Supabase and create an account

    Create a new project

    Wait for the database to initialize

    Go to Settings → Database → Connection string

    Copy the connection URI (should look like postgresql://postgres:[password]@[host]:5432/postgres)
4. Environment Setup

    Create .env file:
```bash
DATABASE_URL="postgresql://username:password@localhost:5432/hr_database"
NODE_ENV="development"
PORT=3001
```

5. Database Setup
```bash
npx prisma generate
npx prisma migrate dev
npx prisma db seed
```
6. Start Development Server
```bash
npm run start:dev
```
The API will be available at http://localhost:3001

## 📊 Status

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![Uptime](https://img.shields.io/badge/uptime-100%25-brightgreen) 
![API Status](https://img.shields.io/badge/API-live-success)

## 🙌 Author

Developed by **Your Name**.  
Feel free to connect with me on [LinkedIn](https://www.linkedin.com/in/hadush-brhane/)
