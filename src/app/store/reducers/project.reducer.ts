import { createReducer, on } from '@ngrx/store';
import {
  loadProject,
  loadProjectSuccess,
  loadProjectFailure,
  updateProject,
  updateProjectSuccess,
  updateProjectFailure,
  loadProjects,
  loadProjectsSuccess,
} from '../actions/project.actions';
import { Project } from '../models/company.model';

export interface ProjectState {
  projects: Project[];
  project: Project | null;
  error: any;
}

export const initialState: ProjectState = {
  projects: [],
  project: null,
  error: null,
};

const _projectReducer = createReducer(
  initialState,
  on(loadProjects, (state) => ({ ...state })),
  on(loadProjectsSuccess, (state, { projects }) => ({
    ...state,
    projects: projects,
  })),

  on(loadProject, (state) => ({ ...state })),
  on(loadProjectSuccess, (state, { project }) => ({ ...state, project })),
  on(loadProjectFailure, (state, { error }) => ({ ...state, error })),
  on(updateProject, (state) => ({ ...state })),
  on(updateProjectSuccess, (state, { project }) => ({ ...state, project })),
  on(updateProjectFailure, (state, { error }) => ({ ...state, error }))
);

export function projectReducer(state: any, action: any) {
  return _projectReducer(state, action);
}
