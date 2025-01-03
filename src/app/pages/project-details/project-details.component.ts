import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';

import { Observable } from 'rxjs';
import {
  Company,
  NewProject,
  Project,
  UpdateProject,
} from '../../store/models/company.model';
import { AppState } from '../../store/app.state';
import { selectProject } from '../../store/selectors/project.selectors';
import {
  createProject,
  loadProject,
  updateProject,
} from '../../store/actions/project.actions';
import moment from 'moment';
import { FormMode } from '../../utilites/enums';
import { selectAllCompanies } from '../../store/selectors/company.selectors';
import { loadCompanies } from '../../store/actions/company.actions';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css'],
})
export class ProjectDetailsComponent implements OnInit {
  project$!: Observable<Project | null>;
  project!: Project;

  organizations: Company[] = [];
  companies$!: Observable<Company[]>;
  projectOrganization: string = '';

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

    this.companies$ = this.store.select(selectAllCompanies);
    this.companies$.subscribe((companies) => {
      this.organizations = companies;
    });
    this.store.dispatch(loadCompanies());

    if (id) {
      this.project$ = this.store.select(selectProject);
      this.project$.subscribe((project) => {
        this.project = { ...project! };
        this.projectOrganization = project?.organization?._id ?? '';
        this.formatDates();
      });
      this.store.dispatch(loadProject({ id }));
    } else {
      this.formMode = FormMode.New;
      this.project = {
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
      let tmpProject: NewProject = {
        organization: this.project.organization!._id,
        position: this.project.position,
        project_name: this.project.project_name,
        from_date: this.project.from_date,
        to_date: this.project.to_date,
        platform: this.project.platform,
        technology: this.tagItems?.map((tech) => tech.value),
        responsibilities: this.project.responsibilities.trimEnd(),
        about_project: this.project.about_project.trimEnd(),
      };

      this.store.dispatch(createProject({ project: tmpProject }));
      // this.router.navigate(['/projects']);
    } else {
      let tmpProject: UpdateProject = {
        _id: this.project._id,
        organization: this.projectOrganization,
        position: this.project.position,
        project_name: this.project.project_name,
        from_date: this.project.from_date,
        to_date: this.project.to_date,
        platform: this.project.platform,
        technology: this.tagItems?.map((tech) => tech.value),
        responsibilities: this.project.responsibilities.trimEnd(),
        about_project: this.project.about_project.trimEnd(),
      };
      this.store.dispatch(updateProject({ project: tmpProject }));
      this.disableEditMode();
    }
  }

  formatDates(): void {
    if (!this.project) {
      return;
    }

    this.tagItems = this.project.technology?.map((tech) => ({
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
