import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { provideHttpClient } from '@angular/common/http';
import {tasksListReducer } from './state/tasks.reducer';



export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    providePrimeNG({
        theme: {
            preset: Aura
        }
    }),
    // ngRX
    provideStore({ tasksListReducer : tasksListReducer }),
    provideAnimationsAsync(),
    provideStoreDevtools(),
    
    provideHttpClient(),
  ]
};