import { createSelector, createFeatureSelector } from '@ngrx/store';
import { TechnologyState } from '../reducers/technology.reducer';

export const selectTechnologyState =
  createFeatureSelector<TechnologyState>('technology');

export const selectAllTechnologies = createSelector(
  selectTechnologyState,
  (state: TechnologyState) => state.technologies
);

export const selectTechnology = createSelector(
  selectTechnologyState,
  (state: TechnologyState) => state.technologies
);
