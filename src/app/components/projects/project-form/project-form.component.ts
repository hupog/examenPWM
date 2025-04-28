import { Component } from '@angular/core';
import { projects } from '../../../models/projects.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { projectsService } from '../../../services/projects/projects.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-project-form',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './project-form.component.html',
  styleUrl: './project-form.component.css'
})
export class ProjectFormComponent {
  project: projects = {
    id: '',
    name: '',
    description: ''
  };
  constructor(private projectService: projectsService, private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.projectService.getProject(params['id']).subscribe(project => {
          this.project = project;
        });
      }
    });
  }
  onSubmit() {
    if (this.project.id) {
      this.projectService.updateProject(this.project);
    } else {
      this.projectService.addProject(this.project);
    }
    this.router.navigate(['/projects']);
  }
  deleteProject() {
    if (this.project.id) {
      this.projectService.deleteProject(this.project.id);
    }
    this.router.navigate(['/projects']);
  }
}
