import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ClientComponent } from './client.component';
import { ClientRoutingModule } from './client-routing.module';
import { BannerComponent } from './banner/banner.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ClientComponent,
    BannerComponent,
  ],
  imports: [CommonModule, ClientRoutingModule],
  exports: [ClientComponent],
})
export class ClientModule {}
