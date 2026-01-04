import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/features/app.component';
import './app/core/function/console-override';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
