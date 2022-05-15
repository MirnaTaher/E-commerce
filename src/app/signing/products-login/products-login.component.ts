import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoggedInService } from '../../logged-in.service';

@Component({
  selector: 'app-products-login',
  templateUrl: './products-login.component.html',
  styleUrls: ['./products-login.component.css'],
})
export class ProductsLoginComponent implements OnInit {
  loginForm: FormGroup;
  isLoggedIn;
  constructor(private loggedInService: LoggedInService,public router: Router) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      loginEmail: new FormControl('', [Validators.required, Validators.email]),
      loginPassword: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)]),
    });
    this.isLoggedIn=this.loggedInService.setIsLoggedIn(false)
  }
  submitLogin(){
    if(this.loginForm.status.toLowerCase() == 'VALID'.toLowerCase()){
      this.loggedInService.setIsLoggedIn(true)
      window.alert("Thanks for logging in!")
    }
    else{
      this.loggedInService.setIsLoggedIn(false)
      window.alert("Sorry, incorrect username or password")

    }
  }
  get loginFormControls(){
    return this.loginForm.controls;
  }


  redirectToRegister(){
    this.router.navigate(['register'])
  }
}
