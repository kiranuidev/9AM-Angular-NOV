import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user= {
    username: "",
    password: ""
  };
  constructor(public loginService: LoginService) { }

  ngOnInit() {
  }
  loginUser() {
    this.loginService.login(this.user);
  }
}
