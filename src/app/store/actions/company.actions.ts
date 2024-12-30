import { createAction, props } from '@ngrx/store';
import { Company } from '../models/company.model';

// Actions for loading companies
export const loadCompanies = createAction('[Company API] Load Companies');
export const loadCompaniesSuccess = createAction(
  '[Company API] Load Companies Success',
  props<{ companies: Company[] }>()
);
export const loadCompaniesFailure = createAction(
  '[Company API] Load Companies Failure',
  props<{ error: any }>()
);

// Actions for loading a single company by ID
export const loadCompany = createAction(
  '[Company API] Load Company',
  props<{ id: string }>()
);
export const loadCompanySuccess = createAction(
  '[Company API] Load Company Success',
  props<{ company: Company }>()
);
export const loadCompanyFailure = createAction(
  '[Company API] Load Company Failure',
  props<{ error: any }>()
);

// Actions for adding a new company
export const addCompany = createAction(
  '[Company API] Add Company',
  props<{ company: Company }>()
);
export const addCompanySuccess = createAction(
  '[Company API] Add Company Success',
  props<{ company: Company }>()
);
export const addCompanyFailure = createAction(
  '[Company API] Add Company Failure',
  props<{ error: any }>()
);

// Actions for updating a company
export const updateCompany = createAction(
  '[Company API] Update Company',
  props<{ company: Company }>()
);
export const updateCompanySuccess = createAction(
  '[Company API] Update Company Success',
  props<{ company: Company }>()
);
export const updateCompanyFailure = createAction(
  '[Company API] Update Company Failure',
  props<{ error: any }>()
);
