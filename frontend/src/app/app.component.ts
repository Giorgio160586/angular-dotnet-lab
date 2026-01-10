import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { ConnectionStatusComponent } from "@core/connection-status/connection-status.components";
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-root',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ToastModule, ConnectionStatusComponent, RouterOutlet],
  templateUrl: './app.component.html'
})
export class AppComponent {
}
