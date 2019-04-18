import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {OnlineDataServiceService} from "../services/online-data-service.service";


@Component({
  selector: 'userdetails',
  template: `
    <div class="details">
      <p> <span class="label"> Use Id: </span> {{user['uuid']}} </p>
      <p> <span class="label">User Name: </span> {{user.name}} </p>
      <p> <span class="label">Email: </span> {{user.email}} </p>
      <p> <span class="label">User Address: </span>{{user.address}} </p>
     </div>
  `,
  styles: [`
    div {text-align: center;  color: darkblue }
    div.details {width: 60%; margin: auto; text-align: left}
    span.label {font-weight: bold}
  `]
})

export class UserdetailsComponent implements OnInit {

  private subscription: Subscription;
  private uuid;
  private user = {};

  constructor(private dataService: OnlineDataServiceService, private activatedRoute: ActivatedRoute) {
    this.subscription = activatedRoute.params.subscribe(
      (param: any) => {
        this.uuid = param['uuid']
       }
    );
  }

  ngOnInit() {
    this.dataService.getCachedUser(this.uuid)
      .then(cachedUser => {
         if(cachedUser != null){
          this.user = {
            uuid: cachedUser['login']['uuid'],
            name: cachedUser['name']['first'] + " " + cachedUser['name']['last'],
            email:cachedUser['email'],
            address: cachedUser['location']['street'] + " " +
                    cachedUser['location']['city'] + " "  +
                    cachedUser['location']['state'] + " " +
                    cachedUser['location']['postcode']

          }
       }

      })
      .catch(err =>{
        console.log("SERVER ERROR: \n", err);
      } )
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
