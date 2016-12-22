import {Component} from '@angular/core';

@Component({
  selector: 'card',
  template: `<div><ng-content></ng-content></div>`,
  styles: [`
    :host {
      padding: 2rem;
      font-size: 2rem;
      font-family: 'Helvetica', sans-serif;
      font-weight: 300;
      background: #e3f2fd;
      margin: 1rem;
      display: inline-block;
    }
  `]
})
export class CardComponent {
  ngOnInit() {
    console.log('card component loaded!');
  }
}
