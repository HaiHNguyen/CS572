import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'component-smart',
  template: `
    
    <!--<component-dumb *ngFor="let item of content | keyvalue" [(contentValue)] = 'item.value'> </component-dumb>-->
    <div *ngFor="let item of content | keyvalue">
        <component-dumb [contentValue]="item.value"></component-dumb>
    </div>
  `,
  styles: []
})
export class SmartComponent implements OnInit {

  private data: any[];
  constructor() { }
  get content(){
    return this.data;
  }

  ngOnInit() {
    this.data =  [
      {data: "This is content 1"},
      {data:"This is content 2"},
      {data: "This is content 3"},
      {data:"This is content 4"}]

  }

}
