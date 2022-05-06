import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/module/user';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  userDetails : User[]=[];

  constructor( private user : UsersService ,) { }

  ngOnInit(): void {
    this.userDetails = this.user.userDetails

  }

  updatePop(){
    
  }

  remove(index:number){
     console.log(index)
     this.user.delete(index)
  }

}
