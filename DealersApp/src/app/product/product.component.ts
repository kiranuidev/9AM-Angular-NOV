import { Component, OnInit,OnChanges,SimpleChanges,Input,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-product',
  template: `<input type="text" [(ngModel)]="name"> {{name}}`,
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, OnChanges,OnDestroy {

  constructor() { 
    console.log("constructor loaded");
  }
  @Input() name="";
  ngOnInit() {
     console.log("Init method called")
  }
  ngOnChanges (change:SimpleChanges){
    console.log(change.name.currentValue);
    console.log(change.name.previousValue);
  }
  ngOnDestroy(){
    console.log("componenet unloaded")
  }
}



