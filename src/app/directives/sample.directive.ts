import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appSample]'
})
export class SampleDirective {

  constructor(private el:ElementRef) { 
    el.nativeElement.style.backgroundColor='#bbbbbb'
  }

}