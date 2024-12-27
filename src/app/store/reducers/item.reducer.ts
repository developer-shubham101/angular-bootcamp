import { createReducer, on } from '@ngrx/store';
import { addItem, removeItem } from '../actions/item.actions';

export const initialState: string[] = [];

const _itemReducer = createReducer(
  initialState,
  on(addItem, (state, { item }) => [...state, item]),
  on(removeItem, (state, { item }) => state.filter((i) => i !== item))
);

export function itemReducer(state: any, action: any) {
  return _itemReducer(state, action);
}
