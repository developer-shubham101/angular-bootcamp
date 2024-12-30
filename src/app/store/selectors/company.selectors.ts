import { createSelector, createFeatureSelector } from '@ngrx/store';
import { CompanyState } from '../reducers/company.reducer';

export const selectCompanyState =
  createFeatureSelector<CompanyState>('companies');

export const selectAllCompanies = createSelector(
  selectCompanyState,
  (state: CompanyState) => state.companies
);

export const selectSelectedCompany = createSelector(
  selectCompanyState,
  (state: CompanyState) => state.selectedCompany
);
