
import { RouterModule, Routes } from "@angular/router";
import {HomeComponent} from "./home.component";
import {LoginComponent} from "./login.component";
import {ProcessComponent} from './process.component';
import {SearchComponent} from "./search.component";
import {DetailsComponent} from "./details.component";
import {ApiComponent} from "./api.component";


const MY_ROUTES: Routes = [
    {path: '', component:HomeComponent},
    {path: 'login', component:LoginComponent},
    // {path: 'process', component:ProcessComponent},
    {
      path: 'process', component:ProcessComponent,
        children:[{path: ':id', component: DetailsComponent}]
    },
    {path: 'search', component:SearchComponent},
    {path: 'protected/:id', component:ApiComponent},
    {path: '**', redirectTo: '/' }
  ];
export const myRoutes = RouterModule.forRoot(MY_ROUTES);

