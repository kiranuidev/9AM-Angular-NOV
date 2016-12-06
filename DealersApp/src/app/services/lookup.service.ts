import { Injectable } from '@angular/core';

@Injectable()
export class LookupService {

  constructor() { }
  getCountries(){
    return [{name:"India", code:"IN"},
    {name:"United States", code:"US"},
      {name:"Australia", code:"AU"}];
  }
}
