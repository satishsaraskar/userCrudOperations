import { UsersService } from 'src/app/service/users.service';
import { User } from './../../module/user';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  fname: string ='' ;
  submitdata: any;
  user: User = new User();
  id:any; 
isEdit :boolean =false ;
  data: any;
  constructor(private usersService: UsersService, private router : Router ,private activatedRoute:ActivatedRoute) { 
    // this.user.fname =''
    // this.user.lname =''
    // this.user.email =''

  }

  ngOnInit(): void {
    if(window.location.href.includes('new')) {
      this.isEdit = false;
    } else {
      this.isEdit = true;
      this.id = +this.activatedRoute.snapshot.params['id']
      this.usersService.getCurrentData(this.id)
      this.user = this.usersService.editData
    }
    console.log(this.isEdit)
  }




  onSubmit(userForm:NgForm){
    let data = userForm.value
    // let user = new User(data.fname,data.lname, data.email)
     this.user.fname =data.fname
     this.user.lname =data.lname
     this.user.email =data.email
    if(this.isEdit) {
      this.usersService.updateUser(this.id,this.user)
    }else 
    {

      this.usersService.saveUser(this.user)
    }
    console.log(this.user)
    console.log(data)
  this.router.navigate(['/user'])

  }


}
