import { Component, OnInit , Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Product } from '../product';
import { ProductService }  from '../products/product.service';
import { User } from '../user';
import { UserService }  from '../users/user.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']

})
export class ProductDetailsComponent implements OnInit {
  //varar = 'hoasdf'; 
  @Input() product: Product;
  user : User;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private userService: UserService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getProduct();
    this.user = JSON.parse(localStorage.getItem("user"));
  }

  getProduct(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(id)
    .subscribe(product => this.product = product)
  }
  goBack(): void {
    this.location.back();
  }
  
  save(): void {
  this.productService.updateProduct(this.product)
    .subscribe(() => this.goBack());
}
}
