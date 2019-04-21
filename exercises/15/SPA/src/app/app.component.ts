
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <div>
        <a [routerLink]= "['']" > Home</a> |
        <a [routerLink] = "['login']" > Login </a> |
        <a [routerLink]="['process']" > Process </a> |
        <a [routerLink]="['search']" [queryParams] = "{id: id}" > Search </a> |
        <a [routerLink]="['protected', id]"> Call API </a>
      </div>
    <router-outlet> </router-outlet>
    `,
  styles: ['']
})
export class AppComponent {
  title = 'SPA';
  private id;

  ngOnInit(){
    this.id = 1;
  }
}
