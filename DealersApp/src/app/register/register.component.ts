import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { LookupService } from '../services/lookup.service';
import { RegisterService } from '../services/register.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[RegisterService]
})
export class RegisterComponent {
   @Input() heading ="";
   @Output() registered:EventEmitter<any> = new EventEmitter<any>();

  minDate="-1D";
  constructor(public lookupService: LookupService,
  public registerService:RegisterService
  ,public router:Router) {
    // this.Countries=lookupService.getCountries();

    lookupService.getCountriesFromApi()
      .then(
      (data) => {
        this.Countries = data.countries;
      })
      .catch((error) => {
        console.log(error)
      });
      this.getCountries()
  }
  user = {
    SelectedCountry: "",
    SelectedState: "",
    Gender: "M",
    phone:"1234567890"
  };//object
  Countries: Array<any>
  States: Array<any>

  registerUser() {
    console.log(this.user);
    this.registerService.registerUser(this.user)
    .subscribe((result=>{
      console.log(result);
    }));
    this.registered.next(this.user);
    this.router.navigateByUrl("home",this.user);

  }
  getStates() {
    this.States = [];
    this.States = this.lookupService.
      getStates(this.user.SelectedCountry);
    console.log(this.States);
  }

 getCountries(){
   this.lookupService.getCountriesFromApiObservable()
   .subscribe((result)=>{
     console.log(result);
   });
 }
  countrySelected(data){
    if(data==null ||data==undefined ||data==""){

    }
    else{
  this.user.SelectedCountry  = data;
    }
  
   }
 
}
