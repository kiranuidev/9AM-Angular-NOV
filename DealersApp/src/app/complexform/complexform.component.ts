import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-complexform',
  templateUrl: './complexform.component.html',
  styleUrls: ['./complexform.component.css']
})
export class ComplexformComponent implements OnInit {
   FormObj:FormGroup
  constructor(fb:FormBuilder) { 
    this.FormObj = fb.group({
       'firstName' : ["",[Validators.required,Validators.minLength(4)]],
      'lastName': ["",[Validators.pattern(/^[a-zA-Z ]*$/)]],
      'gender' : [''],
      'hiking' : false,
      'running' : false,
      'swimming' : false
    });

  }
  submitForm(formData){
    console.log(formData);
  }
  ngOnInit() {
  }

}
