import { createReducer, on } from '@ngrx/store';
import {
  loadProject,
  loadProjectSuccess,
  loadProjectFailure,
  updateProject,
  updateProjectSuccess,
  updateProjectFailure,
} from '../actions/project.actions';
import { Project } from '../models/company.model';

export interface ProjectState {
  project: Project | null;
  error: any;
}

export const initialState: ProjectState = {
  project: null,
  error: null,
};

const _projectReducer = createReducer(
  initialState,
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
