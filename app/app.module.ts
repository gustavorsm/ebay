import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppRoutingModule }     from './app-routing.module';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';

import { UsersComponent } from './users/users.component';
import { UserService } from './users/user.service';

import { ProductsComponent } from './products/products.component';
import { ProductService } from './products/product.service';

import { OrdersComponent } from './orders/orders.component';
import { OrderService } from './orders/order.service';

import { DashboardComponent } from './dashboard/dashboard.component';
import {ProductDetailsComponent} from './product-details/product-details.component';

import { UserDetailsComponent } from './user-details/user-details.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { AuthguardGuard } from './auth-guard.guard';
import { LoginguarGuard } from './login-guard.guard';
import { CarComponent } from './car/car.component';
import { CarService } from './car/car.service';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    OrdersComponent,
    ProductsComponent,
    DashboardComponent,
    ProductDetailsComponent,
    UserDetailsComponent,
    LoginFormComponent,
    CarComponent,
    
  ],
  imports: [
    
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [ProductService,UserService,OrderService,CarService,AuthguardGuard,LoginguarGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
