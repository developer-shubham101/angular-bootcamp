import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { addItem } from '../actions/item.actions';
import { tap } from 'rxjs/operators';

@Injectable()
export class ItemEffects {
  constructor(private actions$: Actions) {}

  addItem$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(addItem),
        tap((action) => console.log('Item added:', action.item))
      ),
    { dispatch: false }
  );
}
