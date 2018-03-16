import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../products/product.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { User } from '../user';
import { UserService } from '../users/user.service';
import { Car } from '../car';
import { CarService } from '../car/car.service';
import { OrderService } from '../orders/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[];
  productsP: Product[];
  user : User;
  car : Car;


  constructor(
  
    private productService: ProductService,
    private carService: CarService,
    private userService : UserService,
  
  ){}
  
  ngOnInit() {
    this.getProducts();
    this.user = JSON.parse(localStorage.getItem("user"));
    //this.productsP.push(id:"123",name:"dsa",price:"23",description:"23")
  }

    getProducts(): void {
      this.productService.getProducts()
      .subscribe(products => this.products = products);
    }
    /*
    getUser()
    {
      const name: string = this.route.snapshot.params.name;
      this.userService.getUserN(name)
      .subscribe(user => this.user = user);
    }
    */
  delete(product : Product ):void {
        this.products = this.products.filter(h => h !== product);
    this.productService.deleteProduct(product).subscribe();
  
  }
  //reparar
  
  addToOrder(product : Product): void {
    this.carService.getCarN(this.user.name)
    .subscribe(car => {
      this.carService.addPedido(car[0], product)
      .subscribe(response => {
        console.log(response);
        console.log(car[0]);
     });
    });
  }

}   
                                                         