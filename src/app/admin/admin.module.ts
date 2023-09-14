import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home.component';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
    declarations: [HomeComponent, HeaderComponent, FooterComponent],
    imports: [CommonModule, AdminRoutingModule],
    exports: [
        FooterComponent
    ]
})
export class AdminModule {}
