import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientModule } from './client/client.module';
import { AdminModule } from './admin/admin.module';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    loadChildren: () => ClientModule,
  },
  {
    path: 'admin',
    canActivate: [AuthGuard],
    loadChildren: () => AdminModule,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
