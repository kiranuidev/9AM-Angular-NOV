import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Router, RouterModule } from '@angular/router';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
//Third party
import { DatePickerModule } from 'ng2-datepicker';
import { Typeahead } from 'ng2-typeahead';
//Services
import { LookupService } from './services/lookup.service';
import { LoginService } from './services/login.service';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PhoneformatterPipe } from './pipes/phoneformatter.pipe';
import { ProductComponent } from './product/product.component';
import { DatepickerDirective } from './datepicker.directive';
import { HighlightDirective } from './highlight.directive';
import { DelayDirective } from './delay.directive';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    Typeahead,
    PhoneformatterPipe,
    ProductComponent,
    DatepickerDirective,
    HighlightDirective,
    DelayDirective,
    CardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DatePickerModule,
    RouterModule.forRoot(
      [{ path: 'login', component: LoginComponent },
       { path: "register", component: RegisterComponent,data:{
         userInfo:""
       } },
        { path: "home", component: HomeComponent,
        children:[
           { path: '', redirectTo: 'product', pathMatch: 'full' },
          {path:"product",component:ProductComponent}
        ]
       },
         { path: "", component: HomeComponent }]
       )

  ],
  providers: [LookupService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
