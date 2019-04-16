import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
   
    <div class="central">
      <app-header></app-header>
      Component Counter Value received: {{currentCounter}}
      <hr>
      <app-counter [(counter)]='_startCounter' (counterChanged) = 'onCounterChanged($event)'> </app-counter>
      <app-footer></app-footer>
    </div>
    
  `,
  styles: [`div.central {font-size: 16px; font-weight: bold; color: black; text-align: center}`]

})
export class AppComponent implements OnInit {
  title: String = 'Counter';
  private _currentCounter: number;
  private _startCounter: number;

  @Input()
  set currentCounter(value: number) {
    this._currentCounter = value;
  }

  get currentCounter() {
    return this._currentCounter;
  }



  ngOnInit() {
    this._startCounter = 5;
    this.currentCounter =  this._startCounter;
  }

  onCounterChanged( counter: number): void{
    this.currentCounter = counter;
  }
}
