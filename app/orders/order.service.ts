
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import {Car} from '../car';
import {Order} from '../order';
import {User} from '../user';
import {UserService} from '../users/user.service';


import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Timestamp } from 'rxjs/operators/timestamp';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class OrderService {
car: Car;
order:Order;
  
  private ordersUrl = 'api/orders';  // URL to web api
  constructor(
    private http: HttpClient
    
  ) {   
      this.order = new Order;
  }
  getOrders() : Observable<Order[]>{
    return this.http.get<Order[]>(this.ordersUrl)
  }/*
  getCarN(name: string): Observable<Car> {
    const url = `${this.carsUrl}/?user.name=${name}`;
    return this.http.get<Car>(url)
  }*/
  addACarToOrders(car:Car): any{
    this.order.id = (new Date).getTime();
    let user = JSON.parse(localStorage.getItem('user'));
    this.order.username = user.name;
    this.order.listP = car.listP;
    console.log("Pedido A adicionar");
    console.log(this.order);

    return this.http.post<Order>(this.ordersUrl, this.order, httpOptions)
    .pipe(
      tap(order => console.log(order)),
      catchError(this.handleError('car to order', ))
    );
  }
  

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
