import { Component, OnInit ,Input} from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import {UserService} from '../users/user.service'


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  user : User;
  
  constructor(
    private router: Router, 
    private userService:UserService
  ) { }

  ngOnInit() {
    //this.user = JSON.parse(localStorage.getItem("user"));
    //console.log(user);
  }
  loginUser(e)
  {
    e.preventDefault();
    
    let username = e.target.elements[0].value;
    let password = e.target.elements[1].value;
    console.log(username,password);
    //console.log(username,password);
    if(username == 'juan' && password == 'admin')
    {
      //console.log("hika") 
       this.userService.setUserLoggedIn();
       this.userService.getUserN(username)
       .subscribe(user => { 
        this.user = user;  
        localStorage.setItem("user",JSON.stringify(this.user[0]));
        this.router.navigateByUrl("/dashboard");
        //console.log(this.user);
        }
      );
       
      
       
       //if(this.userService.verificar(username))
       // this.userService.save(username);
          

      //this.router.navigate(['/dashboard']);
       
    }
  }
}
