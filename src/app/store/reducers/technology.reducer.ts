import { createReducer, on, Action } from '@ngrx/store';
import {
  loadTechnologies,
  loadTechnologiesSuccess,
  loadTechnologiesFailure,
  createTechnology,
  createTechnologySuccess,
  createTechnologyFailure,

} from '../actions/technology.action';
import { Technology } from '../models/technology.model';

export interface TechnologyState {
  technologies: Technology[];
  loading: boolean;
  error: any;
}

export const initialState: TechnologyState = {
  technologies: [],
  loading: false,
  error: null,
};

const _technologyReducer = createReducer(
  initialState,
  on(loadTechnologies, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(loadTechnologiesSuccess, (state, { technologies }) => ({
    ...state,
    technologies,
    loading: false,
    error: null,
  })),
  on(loadTechnologiesFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);

export function technologyReducer(state: TechnologyState | undefined, action: Action) {
  return _technologyReducer(state, action);
}