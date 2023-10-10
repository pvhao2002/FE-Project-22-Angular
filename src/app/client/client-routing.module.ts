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
import {ThanksComponent} from "./thanks/thanks.component";
import {CheckoutComponent} from "./checkout/checkout.component";
import {MyOrderComponent} from "./my-order/my-order.component";

const routes: Routes = [
  {
    path: '',
    component: ClientComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
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
      }, {
        path: 'check-out',
        canActivate: [AuthGuard],
        component: CheckoutComponent
      },
      {
        path: 'thank-you',
        canActivate: [AuthGuard],
        component: ThanksComponent
      }, {
        path: 'my-order',
        canActivate: [AuthGuard],
        component: MyOrderComponent
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
