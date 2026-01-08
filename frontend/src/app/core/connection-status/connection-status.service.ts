
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ConnectionUiEvent, ConnectionState } from './connection-status.interfaces';
 

@Injectable({ providedIn: 'root' })
export class ConnectionStatusService {
  private state$ = new BehaviorSubject<ConnectionUiEvent>({
    state: ConnectionState.Connected
  });

  uiObserver = this.state$.asObservable();

  set(event: ConnectionUiEvent) {
    this.state$.next(event);
  }

  setConnected(message?: string) {
    this.set({ state: ConnectionState.Connected, message });
  }

  setConnecting(message?: string) {
    this.set({ state: ConnectionState.Connecting, message });
  }

  setDisconnected(message?: string) {
    this.set({ state: ConnectionState.Disconnected, message });
  }

  clear() {
    this.setConnected();
  }
}
