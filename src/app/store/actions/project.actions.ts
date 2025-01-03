import { createAction, props } from '@ngrx/store';
import { NewProject, Project, UpdateProject } from '../models/company.model';

// Actions for loading projects
export const loadProjects = createAction('[Project API] Load Projects');
export const loadProjectsSuccess = createAction(
  '[Project API] Load Projects Success',
  props<{ projects: Project[] }>()
);
export const loadProjectsFailure = createAction(
  '[Project API] Load Projects Failure',
  props<{ error: any }>()
);

// Actions for loading a project by ID
export const loadProject = createAction(
  '[Project API] Load Project',
  props<{ id: string }>()
);
export const loadProjectSuccess = createAction(
  '[Project API] Load Project Success',
  props<{ project: Project }>()
);
export const loadProjectFailure = createAction(
  '[Project API] Load Project Failure',
  props<{ error: any }>()
);

// Actions for updating a project
export const updateProject = createAction(
  '[Project API] Update Project',
  props<{ project: UpdateProject }>()
);
export const updateProjectSuccess = createAction(
  '[Project API] Update Project Success',
  props<{ project: Project }>()
);
export const updateProjectFailure = createAction(
  '[Project API] Update Project Failure',
  props<{ error: any }>()
);

// Actions for creating a project
export const createProject = createAction(
  '[Project API] Create Project',
  props<{ project: NewProject }>()
);
export const createProjectSuccess = createAction(
  '[Project API] Create Project Success',
  props<{ project: Project }>()
);
export const createProjectFailure = createAction(
  '[Project API] Create Project Failure',
  props<{ error: any }>()
);
