import { Component, Input } from '@angular/core';
import { Project } from '../../store/models/company.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrl: './project-item.component.css',
})
export class ProjectItemComponent {
  @Input() project: Project = {
    _id: '',
    organization: {
      _id: '',
      organization: '',
      position: '',
      from_date: '',
      to_date: '',
      role: '',
      responsibilities: '',
      projects: [],
      files: [],
    },
    position: '',
    project_name: '',
    from_date: '',
    to_date: '',
    platform: '',
    technology: [],
    about_project: '',
    responsibilities: '',
  };
  constructor(private readonly router: Router) {}

  viewProjectDetails(id: string): void {
    this.router.navigate(['/project', id]); // Navigate to the company details page
  }
}
