import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Project } from '../../store/models/company.model';
import { loadCompanies } from '../../store/actions/company.actions';
import { AppState } from '../../store/app.state';
import { Router } from '@angular/router';
import { selectAllProjects } from '../../store/selectors/project.selectors';
import { loadProject, loadProjects } from '../../store/actions/project.actions';

@Component({
  selector: 'app-project-listing',
  templateUrl: './project-listing.component.html',
  styleUrl: './project-listing.component.css',
})
export class ProjectListingComponent implements OnInit {
  projects$!: Observable<Project[]>;
  constructor(
    private readonly store: Store<AppState>,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.projects$ = this.store.select(selectAllProjects);
    // this.projects$.subscribe((companies) => {
    //   console.log('Companies:', companies);
    // });
    this.store.dispatch(loadProjects());
  }

 
}
