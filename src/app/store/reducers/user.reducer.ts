import { createReducer, on } from '@ngrx/store';
import { User } from '../../models/user.model';
import * as UserActions from '../actions/user.actions';

export interface UserState {
  users: User[];
  loading: boolean;
  error: string | null;
}

export const initialState: UserState = {
  users: [],
  loading: false,
  error: null
};

export const userReducer = createReducer(
  initialState,
  on(UserActions.uploadUsers, state => ({ ...state, loading: true })),
  on(UserActions.uploadUsersSuccess, (state, { users }) => ({ ...state, users, loading: false, error: null })),
  on(UserActions.uploadUsersFailure, (state, { error }) => ({ ...state, error, loading: false })),
  on(UserActions.loadUsers, state => ({ ...state, loading: true })),
  on(UserActions.loadUsersSuccess, (state, { users }) => ({ ...state, users, loading: false, error: null })),
  on(UserActions.loadUsersFailure, (state, { error }) => ({ ...state, error, loading: false }))
);
