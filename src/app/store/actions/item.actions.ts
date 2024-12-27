import { createAction, props } from '@ngrx/store';

export const addItem = createAction(
  '[Item] Add Item',
  props<{ item: string }>()
);

export const removeItem = createAction(
  '[Item] Remove Item',
  props<{ item: string }>()
);
