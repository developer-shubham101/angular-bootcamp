import {
  createTechnology,
  loadTechnologies,
} from './../actions/technology.action';

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { TechnologyService } from '../../service/technology.service';
import {
  createTechnologyFailure,
  createTechnologySuccess,
  loadTechnologiesFailure,
  loadTechnologiesSuccess,
} from '../actions/technology.action';

@Injectable()
export class TechnologyEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly technologyService: TechnologyService
  ) {}

  loadTechnologies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTechnologies),
      mergeMap(() =>
        this.technologyService.getTechnologies().pipe(
          map((technologies) => loadTechnologiesSuccess({ technologies })),
          catchError((error) => of(loadTechnologiesFailure({ error })))
        )
      )
    )
  );

  createTechnology$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createTechnology),
      switchMap((action) =>
        this.technologyService.createTechnology(action.technology).pipe(
          map((technology) => createTechnologySuccess({ technology })),
          catchError((error) => of(createTechnologyFailure({ error })))
        )
      )
    )
  );
}
