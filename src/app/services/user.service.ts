import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { User } from '../models/user.model';
import * as UserActions from '../store/actions/user.actions';
import { AppState } from '../store/app.state';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = `${environment.apiUrl}/users`;

  constructor(
    private http: HttpClient,
    private store: Store<AppState>
  ) { }

  uploadUsers(users: any[]): Observable<any> {
    return new Observable(observer => {
      this.http.post<User[]>(`${this.apiUrl}/upload`, users).subscribe(
        (response: User[]) => {
          this.store.dispatch(UserActions.uploadUsersSuccess({ users: response }));
          observer.next(response);
          observer.complete();
        },
        error => {
          this.store.dispatch(UserActions.uploadUsersFailure({ error: error.message }));
          observer.error(error);
        }
      );
    });
  }

  getUsers(): Observable<User[]> {
    return new Observable(observer => {
      this.http.get<User[]>(this.apiUrl).subscribe(
        (users: User[]) => {
          this.store.dispatch(UserActions.loadUsersSuccess({ users }));
          observer.next(users);
          observer.complete();
        },
        error => {
          this.store.dispatch(UserActions.loadUsersFailure({ error: error.message }));
          observer.error(error);
        }
      );
    });
  }
}
