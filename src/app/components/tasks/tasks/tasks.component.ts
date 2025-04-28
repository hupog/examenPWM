import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { tasksService } from '../../../services/tasks/tasks.service';
import { tasks } from '../../../models/tasks.model';
import { Observable } from 'rxjs';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-tasks',
  imports: [CommonModule, RouterModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  tasks: Observable<tasks[]>;
  newTask: tasks = {
    employeeId: '',
    projectId: '',
    description: ''
  };
  constructor(private tasksService: tasksService) {
    this.tasks = this.tasksService.getTasks();
  }
  addTask() {
    this.tasksService.addTask(this.newTask);
    this.newTask = {
      employeeId: '',
      projectId: '',
      description: ''
    };
  }
  deleteTask(id: string) {
    this.tasksService.deleteTask(id);
  }
  updateTask(task: tasks) {
    this.tasksService.updateTask(task);
  } 
}
