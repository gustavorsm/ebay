import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { Product } from '../product'
import { User } from '../user'

import { ProductService} from '../products/product.service'
import { UserService} from '../users/user.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 products : Product[] = [];
 user : User;
 name : String

 constructor(
  private router: Router, 
  private productService : ProductService, 
  private userService :UserService,
  private location: Location,
  private route: ActivatedRoute,
  
){
 //const name :string = route.snapshot.params.username; 
}
 
  ngOnInit() {
    //this.getProducts();
    //this.getUserRole();
    //this.getUser();
    //console.log(this.user);
    console.log("HOLA12");
    this.getUser();
  }
  getUser()
  {
    this.user = JSON.parse(localStorage.getItem("user"));
    console.log(this.user);
  }
  /*
  getUser(){
    const name: string = this.route.snapshot.params.name;
    console.log(name);
    console.log("hola");
    this.userService.getUserN(name)
    .subscribe(user => this.user = user);
    //console.log(this.user.name)
  }*/

  getProducts(): void{
    
    this.productService.getProducts()
    .subscribe(products => this.products = 
      products.slice(1,5));
  }
  exit(): void{
    localStorage.removeItem("user");
    this.userService.setUserLoggedInF();
    this.router.navigateByUrl("/loginForm");
  }
}
