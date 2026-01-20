
// connection-state.ts
export enum ConnectionState {
  Connected = 'connected',
  Connecting = 'connecting',
  Disconnected = 'disconnected',
}

export interface ConnectionUiEvent {
  state: ConnectionState;
  message?: string;
}
