import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { SignupComponent } from './components/signup/signup.component';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule
  ],
  declarations: [SignupComponent]
})
export class LoginModule { }
