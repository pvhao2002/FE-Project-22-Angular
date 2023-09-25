import {NgModule} from '@angular/core';
import {mapToCanActivate, RouterModule, Routes} from '@angular/router';
import {ClientModule} from './client/client.module';
import {AdminModule} from './admin/admin.module';
import {AuthAdminGuard} from "./guards/auth-admin.guard";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => ClientModule,
  },
  {
    path: 'admin',
    canActivate: [AuthAdminGuard],
    loadChildren: () => AdminModule,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
