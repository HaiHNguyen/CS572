import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  template: `
    <div class="root">
      <h2>{{main_title}}</h2>
      </div>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  private main_title: string  = 'Online Data Service';

  constructor() { }

  ngOnInit() {
  }

}
