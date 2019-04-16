import {Directive, ElementRef, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[ShowMe]'
})
export class ShowMeDirective {

  _isVisible: boolean;

  @Input('isVisible')
  set isVisible( visible: boolean){
    this._isVisible = visible;
  }
  constructor(private e: ElementRef, private r: Renderer2) {
    //
    // if(!this._isVisible){
    //   this.r.setStyle(this.e.nativeElement, 'display', 'none')
    //   console.log('isVisible', false)
    // }else{
    //   console.log('isVisible', true)
    // }
  }

  ngOnInit() {
    if(!this._isVisible){
      this.r.setStyle(this.e.nativeElement, 'display', 'none')
    }
  }

}
