import { Component, OnInit , Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { User } from '../user';
import { UserService }  from '../users/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user: User;
  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private location: Location
  ) { }


  ngOnInit() {
    console.log("hello");
   this.getUser();
  }

  getUser(): void {
    const name: string = this.route.snapshot.params.name;
    console.log(name);
    this.userService.getUserN(name)
    .subscribe(user =>{
      this.user = user
      console.log(user[0]);
  })
  }
  goBack(): void {
    this.location.back();
  }

}
