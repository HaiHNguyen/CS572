import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <div class="central">
        <span>
            <button (click)="decrease()">-</button>
            <span>{{_counter}}</span>
            <button (click)="increase()">+</button> 
            Component Counter Value: {{_counter}}
        </span>
    </div>
  `,
  styles: [`div.central {font-size: 16px; font-weight: bold; color: black; text-align: center}`]

})
export class AppCounterComponent implements OnInit {
  private _counter: number;
  constructor() {

  }

  ngOnInit() {
  }

  @Input()
  set counter (value){
    this._counter = value;

  }

  get counter (){
    return this._counter;
  }


  private decrease (){
    this._counter -= 1;
    this.counterChanged.emit(this._counter.toString());

  }

  private increase(){
    this._counter +=1;
    this.counterChanged.emit(this._counter.toString());
  }

  @Output ()
  counterChanged = new EventEmitter();

}
