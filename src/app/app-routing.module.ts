import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductsListComponent } from './products-list/products-list.component';
import {ProductsLoginComponent} from './signing/products-login/products-login.component'
import {ProductsRegisterComponent} from './signing/products-register/products-register.component'
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { AuthGuardGuard } from './auth-guard.guard';
import { AuthComponent } from './auth/auth.component';
import { SharedModule } from './shared/shared.module';
import { SigningModule } from './signing/signing.module';

const routes: Routes = [
  {
    path: '',
    component: ProductsListComponent,
  },
  {
    path: 'login',
    component: ProductsLoginComponent,
  },
  {
    path: 'auth',
    component: AuthComponent,
    canActivate: [AuthGuardGuard]
  },
  {
    path: 'register',
    component: ProductsRegisterComponent,
  },
  {
    path: 'cart',
    component: ShoppingCartComponent,
  },{
    path: 'product/:id',
    component: DetailsComponent,
  },
  {
    path: '**',
    component: ProductsListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,SigningModule],
})
export class AppRoutingModule {}
