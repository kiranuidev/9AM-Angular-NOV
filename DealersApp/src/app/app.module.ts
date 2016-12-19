import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
//Third party
import {DatePickerModule} from 'ng2-datepicker';
import { Typeahead } from 'ng2-typeahead';
//Services
import {LookupService} from './services/lookup.service';
import {LoginService} from './services/login.service';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PhoneformatterPipe } from './pipes/phoneformatter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    Typeahead,
    PhoneformatterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DatePickerModule
    
  ],
  providers: [LookupService,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
