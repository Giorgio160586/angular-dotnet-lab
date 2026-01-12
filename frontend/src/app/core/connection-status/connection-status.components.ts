
import {
    Component,
    ChangeDetectionStrategy,
    inject,
    forwardRef,
    signal,
    computed,
    HostListener
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConnectionStatusService } from './connection-status.service';
import { CONNECTION_STATUS_INSTANCE } from './connection-status.token';
import { ConnectionState, ConnectionUiEvent } from './connection-status.interfaces';

@Component({
    selector: 'app-connection-status',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './connection-status.components.html',
    styles: [],
    providers: [
        { provide: CONNECTION_STATUS_INSTANCE, useExisting: forwardRef(() => ConnectionStatusComponent) }
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConnectionStatusComponent {

    private readonly connectionStatus = inject(ConnectionStatusService);
    private parent = inject(CONNECTION_STATUS_INSTANCE, { optional: true, skipSelf: true });

    isRoot = computed(() => !this.parent);

    private _state = signal<ConnectionUiEvent>({
        state: ConnectionState.Connected
    });

    constructor() {
        this.connectionStatus.uiObserver.subscribe(ev => this._state.set(ev));
    }

    visible = computed(() => this._state().state !== ConnectionState.Connected);
    message = computed(() => this._state().message ?? '');

    title = computed(() => {
        switch (this._state().state) {
            case ConnectionState.Disconnected: return 'Disconnected';
            case ConnectionState.Connecting: return 'Connecting…';
            default: return 'Connected';
        }
    });

    icon = computed(() => {
        switch (this._state().state) {
            case ConnectionState.Disconnected: return 'disconnected';
            case ConnectionState.Connecting: return 'connecting';
            default: return 'connected';
        }
    });

    close() {
        this.connectionStatus.clear();
    }

    // @HostListener('document:keydown.escape')
    // onEsc() {
    //     this.close();
    // }
}
