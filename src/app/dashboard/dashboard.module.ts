import { NgModule } from '@angular/core';
import { ThemeModule } from '../@theme/theme.module';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { DashboardComponent } from './dashboard.component';
import { UserService } from '../user.service';


@NgModule({
  imports: [ThemeModule, DashboardRoutingModule],
  declarations: [DashboardComponent],
  entryComponents: [],
  providers: [UserService]
})
export class DashboardModule {}
