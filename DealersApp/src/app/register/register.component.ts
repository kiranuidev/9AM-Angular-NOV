import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { LookupService } from '../services/lookup.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
   @Input() heading ="";
   @Output() registered:EventEmitter<any> = new EventEmitter<any>();

  constructor(public lookupService: LookupService) {
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
    Gender: "M"
  };//object
  Countries: Array<any>
  States: Array<any>

  registerUser() {
    console.log(this.user);
    this.registered.next(this.user);
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
  
 
}
