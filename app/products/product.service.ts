import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Product } from '../product';


import { HttpClient, HttpHeaders } from '@angular/common/http'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ProductService {
  
  private productsUrl = 'api/products';  // URL to web api
  //private usersUrl = 'api/users';  // URL to web api
  constructor(private http: HttpClient) { }
  getProducts (): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl)
  }

  getProduct(id: number): Observable<Product> {
    const url = `${this.productsUrl}/${id}`;
    return this.http.get<Product>(url)
  }
  
  updateProduct (product: Product): Observable<any> {
    return this.http.put(this.productsUrl, product, httpOptions)
    //.pipe(
    //  tap(_ => this.log(`updated hero id=${product.id}`)),
    //  catchError(this.handleError<any>('updateHero'))
    //);
  }
  searchProducts(term: string): Observable<Product[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Product[]>(`api/product/?name=${term}`)
  }

  addProduct (product: Product): Observable<Product> {
    return this.http.post<Product>(this.productsUrl, product, httpOptions)
  }

  /** DELETE: delete the hero from the server */
  deleteProduct (product: Product | number): Observable<Product> {
    const id = typeof product === 'number' ? product : product.id;
    const url = `${this.productsUrl}/${id}`;
    return this.http.delete<Product>(url, httpOptions);
  }
  addProductToPedido()
  {
    
  }
}
