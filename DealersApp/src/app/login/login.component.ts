import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import {WallMartService} from '../services/wallmart.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[WallMartService]
})
export class LoginComponent implements OnInit {
  user= {
    username: "",
    password: ""
  };
  constructor(public loginService: LoginService, private wmService:WallMartService) { 
    this.wmService.getProducts("Jeans")
    .subscribe((result)=>{
      console.log(result);
    })

  }

  ngOnInit() {
  }
  loginUser() {
    this.loginService.login(this.user);
  }
}
