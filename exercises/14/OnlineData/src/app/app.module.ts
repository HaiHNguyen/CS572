import { BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { StorageServiceModule } from 'angular-webstorage-service';
import { NgModule } from '@angular/core';

import { AppMainComponent } from './app-main.component';
import { HomeComponent } from './home.component';
import {RouterModule} from "@angular/router";




@NgModule({
  declarations: [
    AppMainComponent,
    HomeComponent,


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StorageServiceModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'users', loadChildren: './users/users.module#UsersModule'}
    ])
  ],
  providers: [],
  bootstrap: [AppMainComponent]
})
export class AppModule { }
