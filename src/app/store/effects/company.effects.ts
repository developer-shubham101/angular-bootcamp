import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CompanyService } from '../../service/company.service';
import {
  loadCompanies,
  loadCompaniesSuccess,
  loadCompaniesFailure,
  loadCompany,
  loadCompanySuccess,
  loadCompanyFailure,
  addCompany,
  addCompanySuccess,
  addCompanyFailure,
  updateCompany,
  updateCompanySuccess,
  updateCompanyFailure,
} from '../actions/company.actions';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class CompanyEffects {
  constructor(
    private actions$: Actions,
    private companyService: CompanyService
  ) {}

  loadCompanies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCompanies),
      mergeMap(() =>
        this.companyService.getCompanies().pipe(
          map((companies) => loadCompaniesSuccess({ companies })),
          catchError((error) => of(loadCompaniesFailure({ error })))
        )
      )
    )
  );

  loadCompany$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCompany),
      mergeMap((action) =>
        this.companyService.getCompanyById(action.id).pipe(
          map((company) => loadCompanySuccess({ company })),
          catchError((error) => of(loadCompanyFailure({ error })))
        )
      )
    )
  );

  addCompany$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addCompany),
      switchMap((action) =>
        this.companyService.addCompany(action.company).pipe(
          map((company) => addCompanySuccess({ company })),
          catchError((error) => of(addCompanyFailure({ error })))
        )
      )
    )
  );

  updateCompany$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateCompany),
      switchMap((action) =>
        this.companyService.updateCompany(action.company).pipe(
          map((company) => updateCompanySuccess({ company })),
          catchError((error) => of(updateCompanyFailure({ error })))
        )
      )
    )
  );
}
