import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <div class="central">
        <span>
            <button (click)="decrease()">-</button>
            <span>{{_counterValue}}</span>
            <button (click)="increase()">+</button> 
            Component Counter Value: {{_counterValue}}
        </span>
    </div>
  `,
  styles: [`div.central {font-size: 16px; font-weight: bold; color: black; text-align: center}`]

})
export class AppCounterComponent implements OnInit {
  private _counterValue: number;
  constructor() {

  }

  ngOnInit() {
  }

  @Input()
  set counterValue (value){
    this._counterValue = value;

  }

  get counterValue (){
    return this._counterValue;
  }


  private decrease (){
    this._counterValue -= 1;
    this.counterChange.emit(this._counterValue);

  }

  private increase(){
    this._counterValue +=1;
    this.counterChange.emit(this._counterValue);
  }

  @Output ()
  counterChange = new EventEmitter();

}
