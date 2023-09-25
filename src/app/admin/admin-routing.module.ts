import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from "./admin.component";
import {HomeComponent} from "./home/home.component";
import {ListComponent} from "./user/list/list.component";
import {AddComponent} from "./user/add/add.component";
import {EditComponent} from "./user/edit/edit.component";

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
            path: 'list',
            component: ListComponent
          }, {
            path: 'add',
            component: AddComponent
          }, {
            path: 'edit/:id',
            component: EditComponent
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
