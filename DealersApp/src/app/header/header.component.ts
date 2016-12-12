import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  pageName="";
  confirmMessage="";
  ngOnInit() {
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
