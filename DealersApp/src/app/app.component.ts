import { Component } from '@angular/core';
import {RegisterComponent} from './register/register.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //directives: [RegisterComponent]
})
export class AppComponent {
  title = 'Welcome to Dealers App';
  pageName="";
  setPageName(type){
    this.pageName=type;
  }

  handleChange(data){
    console.log(data);
    console.log("Event fired from child")
  }
}
