import { Component, OnInit } from '@angular/core';
import {LookupService} from '../services/lookup.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(lookupService:LookupService){
    this.Countries=lookupService.getCountries();
  }
  user = {};//object
  Countries:Array<any>
  

  registerUser() {
    console.log(this.user);
  }

}
