import { Component, OnInit } from '@angular/core';
import { Order } from '../order';
import { OrderService } from '../orders/order.service';
import { User } from '../user';
import { Car } from '../car';
import { UserService } from '../users/user.service';
import { Observable } from 'rxjs/Observable';
import { CarService } from '../car/car.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
orders: Order[];
  constructor(
    private orderService:OrderService
  ) { }

  ngOnInit() {
    this.getOrders();
  }
  getOrders():void{
    this.orderService.getOrders()
    .subscribe(orders=> {
      this.orders = orders;
      console.log(orders);
    });
    
  }

}
