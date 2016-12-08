import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';


//Services
import {LookupService} from './services/lookup.service';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
    
  ],
  providers: [LookupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
