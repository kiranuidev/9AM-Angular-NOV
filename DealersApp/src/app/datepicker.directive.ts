import { Directive,ElementRef,HostListener,Input } from '@angular/core';

@Directive({
  selector: '[datepicker]'
})
export class DatepickerDirective {

  constructor(private el:ElementRef) { 
    console.log(this.minDate);
  }
  @Input() minDate="";
  @HostListener("load") load(){
    //console.log(this.el);
    $(this.el.nativeElement).datepicker();
  }
   
  @HostListener("click") clickMe(){
    console.log(this.el);
    $(this.el.nativeElement).datepicker({minDate:"-10D",maxDate:"+10D"});
  }

}
