import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public loginService:LoginService) { }
  pageName="";
  confirmMessage="";
  showLogout:Boolean=false;
  ngOnInit() {
    this.loginService.isUserLoggedIn().subscribe(
      (result:Boolean)=>{
      console.log(result);
      this.showLogout=result;
    });
  }
  logout(){
    this.loginService.logout();
  }
  
  isLoggedIn=false;
  handleClick(type){
    this.pageName=type;
  };

   handleChange(data){
    console.log(data);
    console.log("Event fired from child");
    this.isLoggedIn=true;
    this.pageName="home";
    this.confirmMessage ="User Registered Successfully";
  }

}
