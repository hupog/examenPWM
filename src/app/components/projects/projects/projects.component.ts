import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { projectsService } from '../../../services/projects/projects.service';
import { projects } from '../../../models/projects.model';
import { Observable } from 'rxjs';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-projects',
  imports: [CommonModule, RouterModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects: Observable<projects[]>;
  newProject: projects = {
    name: '',
    description: ''
  };
  constructor(private projectsService: projectsService) {
    this.projects = this.projectsService.getProjects();
  }
  addProject() {
    this.projectsService.addProject(this.newProject);
    this.newProject = {
      name: '',
      description: ''
    };
  }
  deleteProject(id: string) {
    this.projectsService.deleteProject(id);
  }
  updateProject(project: projects) {
    this.projectsService.updateProject(project);
}
}