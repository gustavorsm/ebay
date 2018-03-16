
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import {Order} from '../order';
import {Product} from '../product';
import {User} from '../User';
import {UserService} from '../users/user.service';
import {ProductService} from '../products/product.service';
import {Car} from '../Car';
import { HttpClient, HttpHeaders } from '@angular/common/http'
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CarService {
  user : User;
  order : Order;
  username: string;
  role: string;
  private carUrl = 'api/car';  // URL to web api
 // private pedidosP = 'api/pedidos/products';  // URL to web api
  
  constructor(
    private userService: UserService,
    private http: HttpClient  
  ) {}
  getPedidos (): Observable<Car[]> {
    return this.http.get<Car[]>(this.carUrl)
  }

  getCarN(username: string): Observable<Car> {
    const url = `${this.carUrl}?username=${username}`;
    console.log(url)
    return this.http.get<Car>(url)
  }


  addPedido (car : Car, product: Product): Observable<Car> {
    car.listP.push(product);
    return this.http.put<Car>(this.carUrl,car,httpOptions);
    /*this.http.put<Pedido>(this.pedidosUrl, pedido, httpOptions).subscribe(response =>{
      console.log(response);
    });
    return null;*/
     
  }
  getProducts(username : string):Observable<Car>{
    const url = `${this.carUrl}/?username=${username}`;
    return this.http.get<Car>(url)
  }

}
