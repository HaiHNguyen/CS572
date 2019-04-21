import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-search',
  template: `
    <p>
      search works!
    </p>
  `,
  styles: []
})
export class SearchComponent implements OnInit {

  private subscription: Subscription;
  constructor( private route: ActivatedRoute) {
    this.subscription = this.route.queryParams.subscribe( (queryParams) =>{
        console.log('Query params:', queryParams['id']);
      }
    )
  }

  ngOnInit() {
  }

}
