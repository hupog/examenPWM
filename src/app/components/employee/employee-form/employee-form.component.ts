import { Component } from '@angular/core';
import { employee } from '../../../models/employee.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { employeeService } from '../../../services/employee/employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-employee-form',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.css'
})
export class EmployeeFormComponent {
  employee: employee = {
    id: '',
    name: '',
    department: ''
  };
  constructor(private employeeService: employeeService, private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.employeeService.getEmployee(params['id']).subscribe(employee => {
          this.employee = employee;
        });
      }
    });
  }
  onSubmit() {
    if (this.employee.id) {
      this.employeeService.updateEmployee(this.employee);
    } else {
      this.employeeService.addEmployee(this.employee);
    }
    this.router.navigate(['/employee']);
  }
  deleteEmployee() {
    if (this.employee.id) {
      this.employeeService.deleteEmployee(this.employee.id);
    }
    this.router.navigate(['/employee']);
  }
}
