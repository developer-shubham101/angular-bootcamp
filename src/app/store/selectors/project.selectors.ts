import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ProjectState } from '../reducers/project.reducer';

export const selectProjectState =
  createFeatureSelector<ProjectState>('project');


export const selectAllProjects = createSelector(
  selectProjectState,
  (state: ProjectState) => state.projects
);

export const selectProject = createSelector(
  selectProjectState,
  (state: ProjectState) => state.project
);
