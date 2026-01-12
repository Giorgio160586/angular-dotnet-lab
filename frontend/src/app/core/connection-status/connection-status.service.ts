
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ConnectionUiEvent, ConnectionState } from './connection-status.interfaces';
 

@Injectable({ providedIn: 'root' })
export class ConnectionStatusService {
  private state$ = new BehaviorSubject<ConnectionUiEvent>({
    state: ConnectionState.Connected
  });

  public uiObserver = this.state$.asObservable();

  public set(event: ConnectionUiEvent) {
    this.state$.next(event);
  }

  public setConnected(message?: string) {
    this.set({ state: ConnectionState.Connected, message });
  }

  public setConnecting(message?: string) {
    this.set({ state: ConnectionState.Connecting, message });
  }

  public setDisconnected(message?: string) {
    this.set({ state: ConnectionState.Disconnected, message });
  }

  public clear() {
    this.setConnected();
  }
}
