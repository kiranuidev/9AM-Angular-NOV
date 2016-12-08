import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
@Injectable()
export class LookupService {

  constructor(private http:Http) {


   }
  private _stateList =
  [{
    name:"Andhra Pradesh",stateCode:"AP",countryCode:"IN"},
{name:"Telangana",stateCode:"TS",countryCode:"IN"},
{name:"Las Vegas",stateCode:"NV",countryCode:"US"}, 
{name:"California",stateCode:"CA",countryCode:"US"}, 
];
private _stateArray:Array<any>
  getCountries() {
    return [{ name: "India", code: "IN" },
    { name: "United States", code: "US" },
    { name: "Australia", code: "AU" }];
  }

  getStates(countryCode) {
     this._stateArray=[];
     for(var i=0;i<this._stateList.length;i++){
       if(this._stateList[i].countryCode== countryCode){
         this._stateArray.push(this._stateList[i]);
       }
     }
     return  this._stateArray;
  }
   
   getCountriesFromApi(){
     return this.http.get("api/countries.json")
     .toPromise()
     .then((response)=>response.json())
     .catch((errorResponse)=>errorResponse.json());
   }
  
}
