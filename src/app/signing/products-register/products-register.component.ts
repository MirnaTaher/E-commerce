import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ConfirmedValidator } from '../confirmed.validator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-register',
  templateUrl: './products-register.component.html',
  styleUrls: ['./products-register.component.css'],
})
export class ProductsRegisterComponent implements OnInit {
  registerForm: FormGroup;
  
  constructor(private fb: FormBuilder,public router: Router) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
        registerName: ['', [Validators.required, Validators.minLength(3), Validators.pattern("^[a-zA-Z ]+$")]],
        registerEmail: ['', [Validators.required, Validators.email]],
        registerUsername: ['',[Validators.required, Validators.minLength(3),Validators.pattern(/^[a-zA-Z\-]+$/),],],
        registerPassword: ['',[Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/),],],
        registerConfirmPassword: ['', [Validators.required]],
        // this is for the dynamic form array
        address: this.fb.array([]),

      },
      {
        validator: ConfirmedValidator('registerPassword','registerConfirmPassword'),
      })
  }
  submitRegister() {
    if(this.registerForm.status.toLowerCase() == 'VALID'.toLowerCase()){
     window.alert("Thanks for registering!")
    }
    else{
      window.alert("Sorry, couldn't register")
    }
  }
  get registerFormControls() {
    return this.registerForm.controls;
  }
  // for the dynamic form array
  addAddress(): void{
    // const addressForm = this.registerForm.controls.address as FormArray;
    this.address.push(this.fb.group({
    // this.address.push(this.fb.control({
      addr: ['', [Validators.required,Validators.pattern("^[a-zA-Z0-9]+$")]],
      street: ['', [Validators.required,Validators.pattern("^[a-zA-Z0-9]+$")]],
      city: ['', [Validators.required,Validators.pattern("^[a-zA-Z-]+$")]],
      country: ['', [Validators.required,Validators.pattern("^[a-zA-Z-]+$")]],

  }));
  }
  get address() {
    return this.registerForm.controls["address"] as FormArray;
  }
  deleteAddress(addressIndex: number) {
    this.address.removeAt(addressIndex);
}
redirectToLogin(){
  this.router.navigate(['login'])
}
}
