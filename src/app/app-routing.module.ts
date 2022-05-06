import { UserEditComponent } from './components/user-edit/user-edit.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  {
    path: '' ,component:UsersComponent
  },
  {
    path: 'user' ,component:UsersComponent
  } ,
  {
    path: 'new' ,component:UserEditComponent
  },
  {
    path: 'edit/:id' ,component:UserEditComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
