
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";


@Component({
  selector: 'process',
  template: `
    <p>
      process works!
      <!--<a [routerLink]="['/process', id ]" > Details </a>-->
      <button (click)="viewDetail()">Details</button>
      <router-outlet></router-outlet>
    </p>
   
  `,
  styles: []
})
export class ProcessComponent implements OnInit {
  private id = 2;
  private subscription:Subscription;
  constructor( private router: Router, private route: ActivatedRoute) {
    this.subscription = route.params.subscribe((params) => {
      console.log('params: ', params['id']);
    })
  }

  ngOnInit() {
  }

  viewDetail(){
    this.router.navigate(['/process', this.id ])
  }

}
