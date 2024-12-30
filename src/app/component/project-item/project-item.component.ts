import { Component, Input } from '@angular/core';
import { Project } from '../../store/models/company.model';

@Component({
  selector: 'app-project-item', 
  templateUrl: './project-item.component.html',
  styleUrl: './project-item.component.css',
})
export class ProjectItemComponent {
  @Input() project: Project = {
    _id: '',
    organization: '',
    position: '',
    project_name: '',
    from_date: '',
    to_date: '',
    platform: '',
    technology: [],
    about_project: '',
    responsibilities: [],
  };
}
