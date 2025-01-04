import {
  createTechnology,
  loadTechnologies,
} from './../actions/technology.action';

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { UserService } from '../../service/user.service';
import {
 createUser,
  createUserFailure,
  createUserSuccess,
  deleteUser,
  deleteUserFailure,
  deleteUserSuccess,
  loadUser,
  loadUserFailure,
  loadUsersSuccess,
  loadUserSuccess,
  updateUser,
  updateUserFailure,
  updateUserSuccess,






} from '../actions/user.action';

@Injectable()
export class UserEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly userService: UserService
  ) {}


  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUser),
      switchMap(() =>
        this.userService.getUsers().pipe(
          map((users) => loadUsersSuccess({ users })),
          catchError((error) => of(loadUserFailure({ error })))
        )
      )
    )
  );


  loadUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUser),
      switchMap(({ id }) =>
        this.userService.getUser(id).pipe(
          map((user) => loadUserSuccess({ user })),
          catchError((error) => of(loadUserFailure({ error })))
        )
      )
    )
  );

  createUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createUser),
      switchMap(({ user }) =>
        this.userService.createUser(user).pipe(
          map((createdUser) => createUserSuccess({ user: createdUser })),
          catchError((error) => of(createUserFailure({ error })))
        )
      )
    )
  );

  updateUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateUser),
      switchMap(({ user }) =>
        this.userService.updateUser(user._id, user).pipe(
          map((updatedUser) => updateUserSuccess({ user: updatedUser })),
          catchError((error) => of(updateUserFailure({ error }))
          )
        )
      )
    )
  );

  /* deleteUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteUser),
      mergeMap(() =>
        this.userService.deleteUser().pipe(
          map(() => deleteUserSuccess()),
          catchError((error) => of(deleteUserFailure({ error })))
        )
      )
    )
  );  */

}
