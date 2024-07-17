import {Component, OnInit, OnDestroy} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Store} from '@ngrx/store';
import {Subject, Observable} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import * as Papa from 'papaparse';
import * as UserActions from '../../store/actions/user.actions';
import {selectUserError, selectUserLoading} from '../../store/selectors/user.selectors';
import {AppState} from '../../store/app.state';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit, OnDestroy {
  selectedFile: File | null = null;
  loading$: Observable<boolean>;
  private unsubscribe$ = new Subject<void>();

  constructor(
    private store: Store<AppState>,
    private snackBar: MatSnackBar
  ) {
    this.loading$ = this.store.select(selectUserLoading);
  }

  ngOnInit(): void {
    this.loading$ = this.store.select(selectUserLoading);

    this.store.select(selectUserError)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(error => {
        if (error) {
          this.showMessage(error);
        }
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0] as File;
  }

  onUpload(): void {
    if (!this.selectedFile) {
      this.showMessage('Please select a file first.');
      return;
    }

    if (!this.selectedFile.name.endsWith('.csv')) {
      this.showMessage('Please upload a CSV file.');
      return;
    }

    Papa.parse(this.selectedFile, {
      complete: (result) => {
        this.store.dispatch(UserActions.uploadUsers({users: result.data}));
      },
      header: true,
      skipEmptyLines: true
    });
  }

  private showMessage(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
    });
  }
}
