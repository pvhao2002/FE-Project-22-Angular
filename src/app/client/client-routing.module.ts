import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ClientComponent} from './client.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {AboutComponent} from "./about/about.component";
import {ProductShopComponent} from "./product-shop/product-shop.component";
import {ProductItemComponent} from "./product-item/product-item.component";
import {CartComponent} from "./cart/cart.component";
import {AuthGuard} from "../guards/auth.guard";

const routes: Routes = [
  {
    path: '',
    component: ClientComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      }, {
        path: 'about',
        component: AboutComponent
      }, {
        path: 'shop',
        component: ProductShopComponent
      }, {
        path: 'product-detail/:id',
        component: ProductItemComponent
      }, {
        path: 'cart',
        canActivate: [AuthGuard],
        component: CartComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientRoutingModule {
}
