import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="main">
        <h2> {{title}}</h2>
        <component-smart></component-smart>
      
        <!--Custom directive-->
        <h2> Show/Hide Directive </h2>
      
        <div>
          Showme with is isVisible='true':  
          <P ShowMe [isVisible]='true'> This is content displayed </P>
        </div>

      <div>
       Showme with is isVisible='false':  
        <P ShowMe [isVisible]='false'> This is content displayed </P>
      </div>

      
      <h2> Make Bigger Directive </h2>
      <button MakeBigger  [fontSize] = 'fontSize'> Double click Me!</button>
      
    </div>
    
  `,
  styles: ['div.main {text-align: center}']


})
export class AppComponent {
  title = 'Smart and Dump Components';
  private fontSize: number;

  constructor(){
    this.fontSize = 16;
  }
}
