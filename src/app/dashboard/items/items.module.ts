import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { ItemsRoutingModule } from './items-routing.module';

import { ItemsComponent } from './items.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ItemsItemComponent } from './items-item/items-item.component';
@NgModule({
  imports: [ThemeModule, ItemsRoutingModule,ReactiveFormsModule,
      FormsModule],
  declarations: [ItemsComponent, ItemsItemComponent],
  providers: []
})
export class ItemsModule {}
