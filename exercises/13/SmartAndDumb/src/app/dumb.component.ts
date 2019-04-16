import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'component-dumb',
  template: `
    <p>
      {{contentValue}}
    </p>
  `,
  styles: ['p {text-align: center; color: darkblue; font-weight: bold}']
})
export class DumbComponent implements OnInit {

  private _contentValue:string;

  @Input()
  set contentValue(content){
    this._contentValue = content['data'];
  }

  get contentValue(){
    return this._contentValue;
  }
  constructor() { }

  ngOnInit() {

  }

}
