
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";


@Component({
  selector: 'api',
  template: `
    <p>
      Api works!
    </p>
  `,
  styles: []
})
export class ApiComponent implements OnInit {
  private id = 2;
  private subscription:Subscription;
  constructor( private route: ActivatedRoute) {
    this.subscription = route.params.subscribe((params) => {
      console.log('params: ', params['id']);
    })
  }

  ngOnInit() {
  }

}
