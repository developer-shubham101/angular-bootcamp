import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';

import { Observable } from 'rxjs';
import { NewProject, Project } from '../../store/models/company.model';
import { AppState } from '../../store/app.state';
import { selectProject } from '../../store/selectors/project.selectors';
import {
  createProject,
  loadProject,
  updateProject,
} from '../../store/actions/project.actions';
import moment from 'moment';
import { FormMode } from '../../utilites/enums';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css'],
})
export class ProjectDetailsComponent implements OnInit {
  project$!: Observable<Project | null>;
  project!: Project;
  formMode: FormMode = FormMode.View;
  tagItems: {
    display: string;
    value: string;
  }[] = []; // Array for tag inputs
  constructor(
    private readonly store: Store<AppState>,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.project$ = this.store.select(selectProject);
      this.project$.subscribe((project) => {
        this.project = { ...project! };
        this.formatDates();
      });
      this.store.dispatch(loadProject({ id }));
    } else {
      this.formMode = FormMode.New;
      this.project = {
        _id: '',
        organization: '',
        position: '',
        project_name: '',
        from_date: '',
        to_date: '',
        platform: '',
        technology: [],
        responsibilities: '',
        about_project: '',
      };

      this.formatDates();
    }
  }

  enableEditMode(): void {
    this.formMode = FormMode.Edit;
  }
  disableEditMode(): void {
    this.formMode = FormMode.View;
  }
  onSubmit(): void {
    if (this.formMode === FormMode.New) {
      let newTmp: NewProject = {
        organization: this.project.organization,
        position: this.project.position,
        project_name: this.project.project_name,
        from_date: this.project.from_date,
        to_date: this.project.to_date,
        platform: this.project.platform,
        technology: this.tagItems.map((tech) => tech.value),
        responsibilities: this.project.responsibilities,
        about_project: this.project.about_project,
      };

      this.store.dispatch(createProject({ project: newTmp }));
      // this.router.navigate(['/projects']);
    } else {
      this.store.dispatch(updateProject({ project: this.project }));
      this.disableEditMode();
    }
  }

  formatDates(): void {
    if (!this.project) {
      return;
    }

    this.tagItems = this.project.technology.map((tech) => ({
      display: tech,
      value: tech,
    }));
    if (this.project.from_date) {
      this.project.from_date = moment(this.project.from_date).format(
        'YYYY-MM-DD'
      );
    }
    if (this.project.to_date) {
      this.project.to_date = moment(this.project.to_date).format('YYYY-MM-DD');
    }
  }
}
