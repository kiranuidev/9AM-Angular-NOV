import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
//Step-1 Import observable
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class RegisterService{
    constructor(private http:Http){

    }
   registerUser(data):Observable<any>{
      
     var url="/api/register";
     return  this.http.post(url,data)
       .map((result)=>{
           console.log(result);
           result.json()});
   };
}