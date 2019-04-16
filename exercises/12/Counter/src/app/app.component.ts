import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  template:`

    <div class="central">
      <app-header></app-header>
      Component Counter Value received: {{currentCounterValue}}
      <hr>
      <app-counter [(counterValue)]='_startCounter' (counterChange)="onCounterChanged($event)"></app-counter>
      <app-footer></app-footer>
    </div>

  `,
  styles: [`div.central {font-size: 16px; font-weight: bold; color: black; text-align: center}`]

})
export class AppComponent implements OnInit {
  title: String = 'Counter';
  private _currentCounterValue: number;
  private _startCounter: number;

  @Input()
  set currentCounterValue(value: number) {
    this._currentCounterValue = value;
  }

  get currentCounterValue() {
    return this._currentCounterValue;
  }



  ngOnInit() {
    this._startCounter = 5;
    this.currentCounterValue =  this._startCounter;
  }

  onCounterChanged( counter: number): void{
    this.currentCounterValue = counter;
  }
}
