
import { InjectionToken } from '@angular/core';
import { ConnectionStatusComponent } from './connection-status.components';
 
export const CONNECTION_STATUS_INSTANCE =
  new InjectionToken<ConnectionStatusComponent>('CONNECTION_STATUS_INSTANCE');
