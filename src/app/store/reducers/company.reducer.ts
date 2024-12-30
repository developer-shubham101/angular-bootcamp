import { createReducer, on } from '@ngrx/store';
import {
  loadCompanies,
  loadCompaniesSuccess,
  loadCompaniesFailure,
  loadCompany,
  loadCompanySuccess,
  loadCompanyFailure,
} from '../actions/company.actions';
import { Company } from '../models/company.model';

export interface CompanyState {
  companies: Company[];
  selectedCompany: Company | null;
  error: any;
}

export const initialState: CompanyState = {
  companies: [],
  selectedCompany: null,
  error: null,
};

const _companyReducer = createReducer(
  initialState,
  on(loadCompanies, (state) => ({ ...state })),
  on(loadCompaniesSuccess, (state, { companies }) => {
    console.log(companies);
    
    return { ...state, companies: companies };
  }),
  on(loadCompaniesFailure, (state, { error }) => ({ ...state, error })),
  on(loadCompany, (state) => ({ ...state })),
  on(loadCompanySuccess, (state, { company }) => ({
    ...state,
    selectedCompany: company,
  })),
  on(loadCompanyFailure, (state, { error }) => ({ ...state, error }))
);

export function companyReducer(state: any, action: any) {
  return _companyReducer(state, action);
}
