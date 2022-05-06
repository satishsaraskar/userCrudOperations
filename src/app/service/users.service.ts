import { User } from './../module/user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
  userDetails: User[] = [
    // new User('satish' , 'saraskar','satishsaraskar@gmail.com'),
    // new User('ishwer' , 'pachariya','pachariya@gmail.com')
  ]

  editData: any;
  constructor() { }

   saveUser(user:User) {
     this.userDetails.push(user)
     console.log(this.userDetails);

   }


   delete(index:number){
     this.userDetails.splice(index,1)
   }


   getCurrentData(eleIndex:number){
     for(let index=0; index<this.userDetails.length; index++) {
      if(index == eleIndex) {
        this.editData = this.userDetails[index]
       }
     }
   }

  updateUser(eleIndex: number,user :User){
    // for(let index=0; index<this.userDetails.length; index++) {
    //   if(index == eleIndex) {
    //     this.editData = this.userDetails[index]
    //    }
    //  }
    
    console.log(eleIndex);
    console.log(user);
  }

}
