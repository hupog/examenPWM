import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { tasks } from '../../../models/tasks.model';
import { tasksService } from '../../../services/tasks/tasks.service';
@Component({
  selector: 'app-tasks-form',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './tasks-form.component.html',
  styleUrl: './tasks-form.component.css'
})
export class TasksFormComponent {
  task: tasks = {
    employeeId: '',
    projectId: '',
    description: '',
  };
  constructor(private taskService: tasksService, private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.taskService.getTask(params['id']).subscribe(task => {
          this.task = task;
        });
      }
    });
  }
  onSubmit() {
    if (this.task.id) {
      this.taskService.updateTask(this.task);
    } else {
      this.taskService.addTask(this.task);
    }
    this.router.navigate(['/tasks']);
  }
  deleteTask() {
    if (this.task.id) {
      this.taskService.deleteTask(this.task.id);
    }
    this.router.navigate(['/tasks']);
  }
}
