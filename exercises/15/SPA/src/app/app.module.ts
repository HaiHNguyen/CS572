
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login.component';
import {myRoutes} from "./app.routes";
import { ProcessComponent } from './process.component';
import { SearchComponent } from './search.component';
import {DetailsComponent} from "./details.component";
import {ApiComponent} from "./api.component";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ProcessComponent,
    DetailsComponent,
    SearchComponent,
    ApiComponent

  ],
  imports: [
    BrowserModule,
    myRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
