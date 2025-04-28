import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { employeeService } from '../../../services/employee/employee.service';
import { employee } from '../../../models/employee.model';
import { Observable } from 'rxjs';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-employee',
  imports: [CommonModule, RouterModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
  employees: Observable<employee[]>;
  newEmployee: employee = {
    name: '',
    department: ''
  };
  constructor(private employeeService: employeeService) {
    this.employees = this.employeeService.getEmployees();
  }
  addEmployee() {
    this.employeeService.addEmployee(this.newEmployee);
    this.newEmployee = {
      name: '',
      department: ''
    };
  }
  deleteEmployee(id: string) {
    this.employeeService.deleteEmployee(id);
  }
  updateEmployee(employee: employee) {
    this.employeeService.updateEmployee(employee);
  }
}