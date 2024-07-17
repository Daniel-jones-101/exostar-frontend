import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';
import {FileUploadComponent} from './components/file-upload/file-upload.component';
import {UserListComponent} from './components/user-list/user-list.component';
import {ErrorDisplayComponent} from './components/error-display/error-display.component';

import {userReducer} from './store/reducers/user.reducer';
import {UserEffects} from './store/effects/user.effects';

import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {environment} from '../environments/environment';
import {AppComponent} from "./app.component";


export const routes: Routes = [
  {path: '', redirectTo: '/upload', pathMatch: 'full'},
  {path: 'upload', component: FileUploadComponent},
  {path: 'users', component: UserListComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    FileUploadComponent,
    UserListComponent,
    ErrorDisplayComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({user: userReducer}),
    EffectsModule.forRoot([UserEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    MatButtonModule,
    MatTableModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
