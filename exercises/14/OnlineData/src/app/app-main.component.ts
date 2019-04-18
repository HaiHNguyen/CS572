import {Component, Injectable} from '@angular/core';
import {OnlineDataServiceService} from "./services/online-data-service.service";

@Component({
  selector: 'app-root',
  template: `
    <div class="root">
        <a [routerLink]="['']">Home</a> |
        <a [routerLink]="['users']">View Users</a>
        <router-outlet></router-outlet>
      
    </div>
    <!--<users></users>-->
  `,
  styles: [`
    div.root {text-align: center;  color: darkblue }
  
  `]
})

export class AppMainComponent {

  constructor( private dataService: OnlineDataServiceService) {

  }

  ngOnInit() {
    this.dataService.getOnlineData()
      .then(data => {
        console.log('Service get and save data successfully');
      })
      .catch(err =>{
        console.log("SERVER ERROR: \n" + err);
      })
  }

  public getCachedData(){
    this.dataService.getCachedData()
      .then(data => {
        console.log('Service get cached data successfully');
      })
      .catch(err =>{
        console.log("SERVER ERROR: \n" + err);
      })
  }
}
