import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: ` 
    
    <p class="footer"> {{appFooter}} </p>
    
  `,
  styles: [`p {font-size: 16px; font-weight: bold; color: black; text-align: center}
            p.footer {font-size: 16px; font-weight: bold;font-style: italic ; color: black; text-align: center}`]
})
export class AppFooterComponent implements OnInit {
  private appFooter:String;
  constructor() {
    this.appFooter = "MUM - Modern Web Programing 2019"
  }

  ngOnInit() {
  }

}
