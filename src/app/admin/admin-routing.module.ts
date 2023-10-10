import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from "./admin.component";
import {HomeComponent} from "./home/home.component";
import {ListUserComponent} from "./user/list/list.component";
import {AddUserComponent} from "./user/add/add.component";
import {EditUserComponent} from "./user/edit/edit.component";
import {ListProductComponent} from "./product/list/list.component";
import {AddProductComponent} from "./product/add/add.component";
import {EditProductComponent} from "./product/edit/edit.component";
import {OrderComponent} from "./order/order.component";

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      }, {
        path: 'user',
        children: [
          {
            path: '',
            redirectTo: 'list',
            pathMatch: 'full'
          },
          {
            path: 'list',
            component: ListUserComponent
          }, {
            path: 'add',
            component: AddUserComponent
          }, {
            path: 'edit/:id',
            component: EditUserComponent
          }
        ]
      }, {
        path: 'product',
        children: [
          {
            path: '',
            redirectTo: 'list',
            pathMatch: 'full'
          },
          {
            path: 'list',
            component: ListProductComponent
          }, {
            path: 'add',
            component: AddProductComponent
          }, {
            path: 'edit/:id',
            component: EditProductComponent
          }
        ]
      }, {
        path: 'order',
        children: [
          {
            path: '',
            redirectTo: 'list',
            pathMatch: 'full'
          }, {
            path: 'list',
            component: OrderComponent
          }
        ]
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {
}
