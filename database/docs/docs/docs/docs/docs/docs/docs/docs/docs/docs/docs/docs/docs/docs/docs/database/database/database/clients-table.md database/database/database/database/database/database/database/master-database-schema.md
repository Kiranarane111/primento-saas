# Primento Master Database Schema

## Core Relationships

Clients
 └── Sites

Sites
 ├── Employees
 ├── Attendance
 ├── Audits
 ├── Inventory
 └── Machines

Employees
 ├── Users
 └── Training

Inventory
 └── Vendors

Machines
 └── Maintenance Records

Audits
 └── Corrective Action Plans (CAPA)

## Key Principles

- One Client can have multiple Sites
- One Site can have multiple Employees
- One Employee can have multiple Attendance Records
- One Employee can have multiple Training Records
- One Site can have multiple Audit Records
- One Site can have multiple Inventory Records
- One Site can have multiple Machines
