import { createAction, props } from '@ngrx/store';
import { NewTechnology, Technology } from '../models/technology.model';

// Actions for loading technologies
export const loadTechnologies = createAction(
  '[Technology API] Load Technologies'
);
export const loadTechnologiesSuccess = createAction(
  '[Technology API] Load Technologies Success',
  props<{ technologies: Technology[] }>()
);
export const loadTechnologiesFailure = createAction(
  '[Technology API] Load Technologies Failure',
  props<{ error: Technology }>()
);


// Actions for creating a technology
export const createTechnology = createAction(
  '[Technology API] Create Technology',
  props<{ technology: NewTechnology }>()
);
export const createTechnologySuccess = createAction(
  '[Technology API] Create Technology Success',
  props<{ technology: Technology }>()
);
export const createTechnologyFailure = createAction(
  '[Technology API] Create Technology Failure',
  props<{ error: Technology }>()
);
