import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';

import { Observable } from 'rxjs';
import { Project } from '../../store/models/company.model';
import { AppState } from '../../store/app.state';
import { selectProject } from '../../store/selectors/project.selectors';
import {
  loadProject,
  updateProject,
} from '../../store/actions/project.actions';
import moment from 'moment';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css'],
})
export class ProjectDetailsComponent implements OnInit {
  project$!: Observable<Project | null>;
  project!: Project;
  editMode = false;

  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.project$ = this.store.select(selectProject);
    this.project$.subscribe((project) => {
      this.project = {...project!};
      this.formatDates();
    });
    this.store.dispatch(loadProject({ id }));
  }

  enableEditMode(): void {
    this.editMode = true;
  }
  disableEditMode(): void {
    this.editMode = false;
  }
  onSubmit(): void {
    this.store.dispatch(updateProject({ project: this.project }));
    this.disableEditMode();
  }

  formatDates(): void {
    if (!this.project) {
      return;
    }
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
