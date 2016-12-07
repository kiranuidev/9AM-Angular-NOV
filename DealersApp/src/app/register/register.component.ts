import { Component, OnInit } from '@angular/core';
import {LookupService} from '../services/lookup.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(public lookupService:LookupService){
    this.Countries=lookupService.getCountries();
  }
  user = {
    SelectedCountry:"",
    SelectedState:"",
    Gender:"M"
  };//object
  Countries:Array<any>
  States:Array<any>

  registerUser() {
    console.log(this.user);
  }
  getStates(){
    this.States=[];
    this.States=this.lookupService.
         getStates(this.user.SelectedCountry);
         console.log(this.States);
  }
}
