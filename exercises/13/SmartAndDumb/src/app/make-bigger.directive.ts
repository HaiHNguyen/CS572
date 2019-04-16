import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[MakeBigger]'
})


export class MakeBiggerDirective {

  constructor( private e:ElementRef, private r:Renderer2) {
  }

  @Input('fontSize')
  set fontSize ( value){
    this.currentFontSize = value + 'px';
  }

  @HostBinding ('style.font-size') currentFontSize;
  @HostBinding ('style.color') currentColor;

  @HostListener('dblclick') makeMeBigger(){
    let size:number = parseInt(this.currentFontSize) + 2;
    this.currentFontSize =  size  + 'px';
  }

  @HostListener ('mouseenter') highlightMe(){
    this.currentColor = 'blue';
  }


  @HostListener ('mouseleave') reset(){
    this.currentColor = 'black';
  }

  ngOnInit() {
  }

}
