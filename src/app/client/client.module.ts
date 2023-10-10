import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home/home.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {ClientComponent} from './client.component';
import {ClientRoutingModule} from './client-routing.module';
import {BannerComponent} from './banner/banner.component';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {AboutComponent} from './about/about.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgxSpinnerModule} from "ngx-spinner";
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductShopComponent } from './product-shop/product-shop.component';
import { CartComponent } from './cart/cart.component';
import { ThanksComponent } from './thanks/thanks.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { MyOrderComponent } from './my-order/my-order.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ClientComponent,
    BannerComponent,
    LoginComponent,
    RegisterComponent,
    AboutComponent,
    ProductItemComponent,
    ProductShopComponent,
    CartComponent,
    ThanksComponent,
    CheckoutComponent,
    MyOrderComponent,
  ],
    imports: [
        CommonModule,
        ClientRoutingModule,
        FormsModule,
        NgxSpinnerModule,
        ReactiveFormsModule,
    ],
  exports: [ClientComponent, HeaderComponent, FooterComponent],
})
export class ClientModule {
}
