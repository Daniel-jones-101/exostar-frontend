import { createAction, props } from '@ngrx/store';
import { User } from '../../models/user.model';

export const uploadUsers = createAction('[User] Upload Users', props<{ users: any[] }>());
export const uploadUsersSuccess = createAction('[User] Upload Users Success', props<{ users: User[] }>());
export const uploadUsersFailure = createAction('[User] Upload Users Failure', props<{ error: string }>());

export const loadUsers = createAction('[User] Load Users');
export const loadUsersSuccess = createAction('[User] Load Users Success', props<{ users: User[] }>());
export const loadUsersFailure = createAction('[User] Load Users Failure', props<{ error: string }>());
