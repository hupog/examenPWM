import { Routes } from '@angular/router';
import { EmployeeComponent } from './components/employee/employee/employee.component';
import { ProjectsComponent } from './components/projects/projects/projects.component';
import { TasksComponent } from './components/tasks/tasks/tasks.component';
import { EmployeeFormComponent } from './components/employee/employee-form/employee-form.component';
import { ProjectFormComponent } from './components/projects/project-form/project-form.component';
import { TasksFormComponent } from './components/tasks/tasks-form/tasks-form.component';

export const routes: Routes = [
  { path: '', redirectTo: '/employee', pathMatch: 'full' },
  { path: 'employee', component: EmployeeComponent },
  { path: 'employee/new', component: EmployeeFormComponent },
  { path: 'employee/edit/:id', component: EmployeeFormComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'projects/new', component: ProjectFormComponent },
  { path: 'projects/edit/:id', component: ProjectFormComponent },
  { path: 'tasks', component: TasksComponent },
  { path: 'tasks/new', component: TasksFormComponent },
  { path: 'tasks/edit/:id', component: TasksFormComponent },
  { path: '**', redirectTo: '/employee' },
];
