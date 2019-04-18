import {Component, Injectable, OnInit} from '@angular/core';
import {OnlineDataServiceService} from "../services/online-data-service.service";


@Component({
  selector: 'users',
  template: `
    <div >
        <h3> Users </h3>
        <div class="content" *ngFor="let user of displayUsers">
            <user [user]="user"> </user>
        </div>
    </div>
  `,
  styles: [`
    div {text-align: center;  color: darkblue }
    div.content {width: 80%; margin: auto;}
  `]

})
@Injectable()
export class UsersComponent implements OnInit {

  displayUsers: any[] = [];
  constructor( private dataService: OnlineDataServiceService) {
  }

  ngOnInit() {
    this.dataService.getCachedData()
      .then(data => {
        let users = data['results'];
        let index = -1;
        if(users != null){
          users.forEach( (user) =>{
            index+=1;
            let ui = {
                uuid: user['login']['uuid'],
                name: user['name']['first'] + " " + user['name']['last'],
                email:user['email']
            }
            this.displayUsers[index] = ui;
         })
       }
    })
    .catch(err =>{
      console.log("SERVER ERROR: \n", err);
    })
  }
}


