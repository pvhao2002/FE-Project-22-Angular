import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {AdminRoutingModule} from './admin-routing.module';
import {AdminComponent} from "./admin.component";
import {HomeComponent} from "./home/home.component";
import { ListComponent } from './user/list/list.component';
import { AddComponent } from './user/add/add.component';
import { EditComponent } from './user/edit/edit.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgxSpinnerModule} from "ngx-spinner";

@NgModule({
  declarations: [AdminComponent, HeaderComponent, FooterComponent, HomeComponent, ListComponent, AddComponent, EditComponent],
  imports: [CommonModule, AdminRoutingModule, FormsModule, ReactiveFormsModule, NgxSpinnerModule],
  exports: [
    FooterComponent
  ]
})
export class AdminModule {
}
