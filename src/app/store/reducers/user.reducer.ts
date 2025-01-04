import { createReducer, on, Action } from '@ngrx/store';
import {
  loadUsers,
  loadUsersSuccess,
  loadUsersFailure,
  createUser,
  createUserSuccess,
  createUserFailure,
  updateUser,
  updateUserSuccess,
  updateUserFailure,
  deleteUser,
  deleteUserSuccess,
  deleteUserFailure,
  

} from '../actions/user.action';
import {  User } from '../models/user.model';
 

export interface UserState {
  user: User | null ;
  users: User[];
  loading: boolean;
  error: any;
}


export const initialState: UserState = {
  user: null,
  users: [],
  loading: false,
  error: undefined,
};


const _userReducer = createReducer(
  initialState,
  on(loadUsers, (state) => ({
    ...state,
    loading: true,
  })),
  on(loadUsersSuccess, (state, { users }) => ({
    ...state,
    users: users,
    loading: false,
  })),
  on(loadUsersFailure, (state, { error }) => ({
    ...state,
    error: error,
    loading: false,
  })),
  on(createUser, (state) => ({
    ...state,
    loading: true,
  })),
  on(createUserSuccess, (state, { user }) => ({
    ...state,
    users: [...state.users, user],
    loading: false,
  })),
  on(createUserFailure, (state, { error }) => ({
    ...state,
    error: error,
    loading: false,
  })),
  on(updateUser, (state) => ({
    ...state,
    loading: true,
  })),
  on(updateUserSuccess, (state, { user }) => ({
    ...state,
    users: state.users.map((item) => (item._id === user._id ? user : item)),
    loading: false,
  })),
  on(updateUserFailure, (state, { error }) => ({
    ...state,
    error: error,
    loading: false,
  })),
  on(deleteUser, (state) => ({
    ...state,
    loading: true,
  })),
  on(deleteUserSuccess, (state) => ({
    ...state,
    loading: false,
  })),
  on(deleteUserFailure, (state, { error }) => ({
    ...state,
    error: error,
    loading: false,
  }))
);

export function userReducer(state: UserState | undefined, action: Action) {
  return _userReducer(state, action);
}