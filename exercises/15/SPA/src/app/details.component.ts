import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";


@Component({
  selector: 'details',
  template: `
    <p>
      Details works!
    </p>
  `,
  styles: []
})
export class DetailsComponent implements OnInit {


  private subscription:Subscription;
  constructor( private route: ActivatedRoute) {
    this.subscription = route.params.subscribe((params) => {
      console.log('params: ', params['id']);
    })
  }

  ngOnInit() {
  }

}
