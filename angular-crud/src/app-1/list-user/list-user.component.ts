import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../service/user.service";
import {User} from "../model/user.model";

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {
  
  users: User[];

   fakeUsers = [{id: 1, firstName: 'Dhiraj', lastName: 'Ray', email: 'dhiraj@gmail.com'},
      {id: 1, firstName: 'Tom', lastName: 'Jac', email: 'Tom@gmail.com'},
      {id: 1, firstName: 'Hary', lastName: 'Pan', email: 'hary@gmail.com'},
      {id: 1, firstName: 'praks', lastName: 'pb', email: 'praks@gmail.com'},
    ];

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
      this.userService.getUsers()
      .subscribe( data => {
        this.users = data;
      });
  }

  deleteUser(user: User): void {
    this.userService.deleteUser(user.id)
      .subscribe( data => {
        this.users = this.users.filter(u => u !== user);
      })
  };

  editUser(user: User): void {
    localStorage.removeItem("editUserId");
    localStorage.setItem("editUserId", user.id.toString());
    this.router.navigate(['edit-user']);
  };

  addUser(): void {
    this.router.navigate(['add-user']);
  };

}
