import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NeedAuthGuard } from './auth.guard';
import { AddOrderComponent } from './order/add-order/add-order.component';
import { EditOrderComponent } from './order/edit-order/edit-order.component';
import { ViewOrderComponent } from './order/view-order/view-order.component';
import { OrderListComponent } from './order/order-list/order-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [NeedAuthGuard] },
  { path: 'orders', component: OrderListComponent, canActivate: [NeedAuthGuard] },
  { path: 'add', component: AddOrderComponent, canActivate: [NeedAuthGuard] },
  { path: 'details/view/:detailId', component: ViewOrderComponent, canActivate: [NeedAuthGuard] },
  { path: 'details/edit/:detailId', component: EditOrderComponent, canActivate: [NeedAuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
