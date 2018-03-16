import { Component, OnInit } from '@angular/core';
import { Order } from '../order';
import { OrderService } from '../orders/order.service';
import { User } from '../user';
import { UserService } from '../users/user.service';
import { Product } from '../product';
import { ProductService } from '../products/product.service';
import { Observable } from 'rxjs/Observable';
import { Car } from '../car';
import { CarService } from '../car/car.service';
@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
cars: Car[];
products: Product[];
user : User;
order: Order;
orders: Order[];
car:Car;
  constructor(
    private userService : UserService,
    private productService: ProductService,
    private orderService: OrderService,
    private carService: CarService,
    
  ) { }

  ngOnInit() {
    this.getUser();
    //this.getPedido();
    this.getCar();
  }/*
  getCars()
  {
    this.orderService.getOrders()
    .subscribe(orders=>this. orders=orders);
  }*/
  getUser()
  {
    this.user = JSON.parse(localStorage.getItem("user"));  
  }/*
  getPedidos(): void
  {
    this.pedidoService.getPedidos()
      .subscribe(pedidos => this.pedidos = pedidos);
  }*/
  getCar():void
  {
    this.carService.getCarN(this.user.name)
    .subscribe(car =>{  
      this.car = car[0];

    });
  }
  save(car : Car):void{
    this.orderService.addACarToOrders(car);
  }


  
}
