import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <h2>
      {{title}}
    </h2>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  title =  'Welcome to SPA'
  constructor() { }

  ngOnInit() {
  }

}
