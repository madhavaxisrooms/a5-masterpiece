import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { SignupComponent } from './components/signup/signup.component';
import { MatInputModule, MatIconModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, Headers } from '@angular/http';
import { UserIpdataService } from "./services/user-ipdata.service";
import { HttpClientModule } from '@angular/common/http';
import { CreateUserService } from "./services/create-user.service";
import {Title} from '@angular/platform-browser';
@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    MatIconModule
  ],
  declarations: [SignupComponent],
  providers:[
    UserIpdataService,
    CreateUserService,
    Title
  ]
})
export class LoginModule { }
