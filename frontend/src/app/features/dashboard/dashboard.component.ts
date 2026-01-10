import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ToastModule } from 'primeng/toast';
import { AppTopbar } from 'src/app/shared/app-topbar/app.topbar.component';
import { AppFooter } from 'src/app/shared/app-footer/app.footer.component';
import { ProductOverviewWidget } from '../products/products.component';
import { RecentActivityWidget } from '../recent-activity-widget/recentactivitywidget';
import { SalesTrendWidget } from '../sales-trend-widget/salestrendwidget';
import { StatsWidget } from '../stats-widget/statswidget';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AppTopbar, StatsWidget, SalesTrendWidget, RecentActivityWidget, ProductOverviewWidget, AppFooter, ToastModule],
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
}
