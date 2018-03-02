import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemsComponent } from './items.component';

const itemsRoutes = [
  { path: '', component: ItemsComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(itemsRoutes)],
  exports: [RouterModule]
})
export class ItemsRoutingModule {}
