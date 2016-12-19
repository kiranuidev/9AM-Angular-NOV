import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
//Step-1 Import observable
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class WallMartService{
    constructor(private http:Http){

    }
   getProducts(data):Observable<any>{
      // var url ='/WM/search?apiKey=yjrruzc9fgbxvs28qw2rjczv&format=json&query='+data;
     var url="/api/register";
     return  this.http.post(url,{"firstname":"abcd"})
       .map((result)=>result.json());
   };
}