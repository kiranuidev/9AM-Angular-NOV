import { Directive,HostListener,ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el:ElementRef) { }
 @HostListener('mouseenter') onMouseEnter(){
   this.el.nativeElement.style.backgroundColor ='red';
 }
 @HostListener("mouseleave") onMouseLeave(){
    this.el.nativeElement.style.backgroundColor ='green';
 }
}
