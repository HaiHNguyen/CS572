import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersComponent } from './users.component';
import { UserdetailsComponent } from './userdetails.component';
import { UserComponent } from './user.component';
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [UsersComponent, UserdetailsComponent, UserComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: UsersComponent },
      { path: ':uuid', component: UserdetailsComponent }
    ])
   ],
  exports: [UsersComponent, UserComponent, UserdetailsComponent]
})
export class UsersModule { }
