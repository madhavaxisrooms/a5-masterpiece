import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { SignupComponent } from './components/signup/signup.component';
import { MatInputModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    MatInputModule,
  ],
  declarations: [SignupComponent]
})
export class LoginModule { }
