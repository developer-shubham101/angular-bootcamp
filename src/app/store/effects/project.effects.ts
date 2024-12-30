import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
 
import {
  loadProject,
  loadProjectSuccess,
  loadProjectFailure,
  updateProject,
  updateProjectSuccess,
  updateProjectFailure,
} from '../actions/project.actions';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ProjectService } from '../../project.service';

@Injectable()
export class ProjectEffects {
  constructor(
    private actions$: Actions,
    private projectService: ProjectService
  ) {}

  loadProject$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadProject),
      mergeMap((action) =>
        this.projectService.getProjectById(action.id).pipe(
          map((project) => loadProjectSuccess({ project })),
          catchError((error) => of(loadProjectFailure({ error })))
        )
      )
    )
  );

  updateProject$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateProject),
      switchMap((action) =>
        this.projectService.updateProject(action.project).pipe(
          map((project) => updateProjectSuccess({ project })),
          catchError((error) => of(updateProjectFailure({ error })))
        )
      )
    )
  );
}
