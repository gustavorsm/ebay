import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ProductDetailsComponent } from './product-details/product-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { OrdersComponent} from './orders/orders.component';
import {AuthguardGuard} from './auth-guard.guard';
import {LoginguarGuard} from './login-guard.guard';
import { CarComponent } from './car/car.component';

const routes: Routes = [
  { path: '', canActivate:[LoginguarGuard], component : LoginFormComponent},
  { path: 'loginForm',canActivate:[LoginguarGuard], component : LoginFormComponent},
  { path: 'product', canActivate:[AuthguardGuard],component: ProductsComponent },
  { path: 'user', canActivate:[AuthguardGuard],component: UsersComponent },
  { path: 'dashboard', canActivate:[AuthguardGuard], component: DashboardComponent },
  { path: 'orders', canActivate:[AuthguardGuard], component: OrdersComponent },
  { path: 'productDetail/:id', canActivate:[AuthguardGuard],component:ProductDetailsComponent },
  { path: 'userDetail/:name', canActivate:[AuthguardGuard],component:UserDetailsComponent },
  { path: 'userDetail', canActivate:[AuthguardGuard],component:UserDetailsComponent },
  { path: 'car', canActivate:[AuthguardGuard],component:CarComponent },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
