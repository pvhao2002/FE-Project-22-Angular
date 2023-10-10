import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {AdminRoutingModule} from './admin-routing.module';
import {AdminComponent} from "./admin.component";
import {HomeComponent} from "./home/home.component";
import {AddUserComponent} from './user/add/add.component';
import {EditUserComponent} from './user/edit/edit.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgxSpinnerModule} from "ngx-spinner";
import {ListUserComponent} from "./user/list/list.component";
import {ListProductComponent} from "./product/list/list.component";
import {AddProductComponent} from "./product/add/add.component";
import {EditProductComponent} from "./product/edit/edit.component";
import { OrderComponent } from './order/order.component';

@NgModule({
  declarations: [
    AdminComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ListUserComponent,
    AddUserComponent,
    EditUserComponent,
    ListProductComponent,
    AddProductComponent,
    EditProductComponent,
    OrderComponent
    ],
  imports: [CommonModule, AdminRoutingModule, FormsModule, ReactiveFormsModule, NgxSpinnerModule],
  exports: [
    FooterComponent
  ]
})
export class AdminModule {
}
