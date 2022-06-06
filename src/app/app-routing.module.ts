import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './components/customers/customers.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditShopComponent } from './components/edit-shop/edit-shop.component';
import { ItemsComponent } from './components/items/items.component';
import { LoginComponent } from './components/login/login.component';
import { OrdersComponent } from './components/orders/orders.component';
import { IsSignedInGuard } from './is-signed-in.guard';
import { MapComponent } from './map/map.component';
import { ShopownerComponent } from './shopowner/shopowner.component';

const routes: Routes = [
  {path:"",component:DashboardComponent,canActivate:[IsSignedInGuard]},
  {path:"login",component:LoginComponent},
  {path:"dashboard",component:DashboardComponent,canActivate:[IsSignedInGuard]},
  {path:"customers",component:CustomersComponent,canActivate:[IsSignedInGuard]},
  {path:"orders",component:OrdersComponent,canActivate:[IsSignedInGuard]},
  // {path:"orders",component:OrdersComponent,canActivate:[IsSignedInGuard]},
  {path:"items",component:ItemsComponent,canActivate:[IsSignedInGuard]},
  {path:"shopowner",component:ShopownerComponent,canActivate:[IsSignedInGuard]},
  {path:"editshop",component:EditShopComponent,canActivate:[IsSignedInGuard]},
  {path:"map",component:MapComponent,canActivate:[IsSignedInGuard]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
