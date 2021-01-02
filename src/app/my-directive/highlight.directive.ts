import { Directive  , ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective  {

  constructor(private EL: ElementRef) { 
    this.EL.nativeElement.style.backgroundColor = 'red'
  }
  
}
