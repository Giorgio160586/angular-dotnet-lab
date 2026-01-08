import { Component } from '@angular/core';
import { AppTopbar } from '../shared/app-topbar/app.topbar.component';
import { StatsWidget } from "./stats-widget/statswidget";
import { SalesTrendWidget } from "./sales-trend-widget/salestrendwidget";
import { RecentActivityWidget } from "./recent-activity-widget/recentactivitywidget";
import { AppFooter } from "../shared/app-footer/app.footer.component";
import { ProductOverviewWidget } from './products/products.component';
import { ToastModule } from 'primeng/toast';
import { ConnectionStatusComponent } from "@core/connection-status/connection-status.components";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AppTopbar, StatsWidget, SalesTrendWidget, RecentActivityWidget, ProductOverviewWidget, AppFooter, ToastModule, ConnectionStatusComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
