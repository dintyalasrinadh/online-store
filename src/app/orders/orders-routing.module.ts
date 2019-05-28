import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrdersComponent } from './orders.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';

const routes: Routes = [
  { path: '', component: OrdersComponent },
  { path: 'details', component: OrderDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { 
  static components = [ OrdersComponent, OrderDetailComponent ];
}
