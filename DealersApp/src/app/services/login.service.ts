import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class LoginService{
    isAuthenticated: Subject<Boolean> = new Subject<Boolean>();
    isLoggedIn:Boolean=false;
    
    login(data){
        if(data.username=="kiran" && data.password=="test"){
            this.isLoggedIn=true;
        }
        this.isAuthenticated.next(this.isLoggedIn);
    }
    logout(){
        this.isLoggedIn=false;
        this.isAuthenticated.next(this.isLoggedIn);
    }

    isUserLoggedIn():Observable<Boolean>{
        return this.isAuthenticated.asObservable();
    }
}