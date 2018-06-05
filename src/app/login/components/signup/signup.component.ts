import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UserIpdataService } from "../../services/user-ipdata.service";
import { CreateUserService } from "../../services/create-user.service";
import { Title } from '@angular/platform-browser';
import { ToasterService } from "../../../shared/services/toaster.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public signupForm;
  public pwHidden: String = "password";
  constructor(
    private formBuilder: FormBuilder,
    private userIpDataService: UserIpdataService,
    private createUserService: CreateUserService,
    private titleService: Title,
    private toaster: ToasterService,
    private router: Router
  ) {
    this.titleService.setTitle('Sign Up')
  }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      name: [, Validators.required],
      emailId: [, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.]+.[a-z]{2,4}$")]],
      password: [, [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
      confirmPassword: [, Validators.required],
      mobile: [, [Validators.required, Validators.pattern('^[0-9]{10,}$')]]
    });

  }


  createSupplier() {
    window.open('https://app.axisrooms.com', '_self');
    this.createUserService.createUser(this.signupForm.value).subscribe(
      res => {
        window.open('https://app.axisrooms.com', '_self');
      },
      err => {
        this.toaster.displayToaster('err', 'error')
      }
    );
  }

  togglePwVisibilty() {
    this.pwHidden === 'text' ? this.pwHidden = "password" : this.pwHidden = 'text';
  }

}
