import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators'

import { User } from '../user';

import { HttpClient, HttpHeaders } from '@angular/common/http'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {
  private isUserLoggedIn;
  private username;
  private existUser;
  user : User;

  private usersUrl = 'api/users';  // URL to web api
  constructor(private http: HttpClient) { 
    //this.isUserLoggedIn=false;
    this.isUserLoggedIn=this.getUserL();
    console.log(this.isUserLoggedIn);
  }

  verificar(username : string){
   if(this.usersUrl.indexOf(username)==-1) 
     return false;
  return true;
  }

  getUserL(){
      console.log("hola");
      if((JSON.parse(localStorage.getItem("user")))===null)
        return false;
      return true;
  }

  setUserLoggedIn(){
    this.isUserLoggedIn = true;
  }
  setUserLoggedInF(){
    this.isUserLoggedIn = false;
  }
  getUserLoggedIn(){
      return this.isUserLoggedIn;
  }

  getUsers (): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl)
  }
  getUser(id: number): Observable<User> {
    const url = `${this.usersUrl}/${id}`;
    console.log(url);
    return this.http.get<User>(url)
  }  
  getUserN(name: string): Observable<User> {
    const url = `${this.usersUrl}/?name=${name}`;
    return this.http.get<User>(url)
  }
  
  searchUsers(term: string): Observable<User[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<User[]>(`api/user/?name=${term}`)
  }

  addProduct (user: User): Observable<User> {
    
    return this.http.post<User>(this.usersUrl, user, httpOptions)
  }
  /*
  deleteProduct (user: User | number): Observable<User> {
    const id = typeof user === 'number' ? user : user.id;
    const url = `${this.usersUrl}/${id}`;
    return this.http.delete<User>(url, httpOptions);
  }*/



  
  /*saveLocalStorage(user : User):void {
    localStorage.setItem("user", JSON.stringify(user)); 
  }
  openLocalStorage():{
    user : User;
    user = localStorage.getItem("user");
    return user;
  }*/

}
