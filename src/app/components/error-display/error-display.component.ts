import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-display',
  templateUrl: './error-display.component.html',
  styleUrls: ['./error-display.component.scss']
})
export class ErrorDisplayComponent implements OnInit {
  @Input() errorMessage: string = '';
  @Input() showError: boolean = false;

  constructor() { }

  ngOnInit(): void { }

  closeError(): void {
    this.showError = false;
    this.errorMessage = '';
  }
}
