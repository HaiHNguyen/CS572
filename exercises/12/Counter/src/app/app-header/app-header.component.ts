import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <p class="header"> {{appHeader}}</p>
  `,
  styles: [`p {font-size: 16px; font-weight: bold; color: black; text-align: center}
            p.header {font-size: 26px; font-weight: bold; color: darkblue; text-align: center}`]
})
export class AppHeaderComponent implements OnInit {
  private appHeader:String;
  constructor() {
    this.appHeader = "Exercise 12 -  Counter";
  }

  ngOnInit() {
  }

}
