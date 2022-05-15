import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRegisterComponent } from './products-register/products-register.component';
import { ProductsLoginComponent } from './products-login/products-login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { Router } from '@angular/router';

@NgModule({
  declarations: [ProductsLoginComponent,
    ProductsRegisterComponent,],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports:[
    ProductsLoginComponent,
    ProductsRegisterComponent,

  ]
})
export class SigningModule { }
