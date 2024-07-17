import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';

import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {provideStore} from '@ngrx/store';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({eventCoalescing: true}), provideAnimationsAsync(), provideStore()]
};
