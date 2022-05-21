import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { ViewCartComponent } from './view-cart/view-cart.component';

const routes: Routes = [
  { path: 'product', redirectTo: 'product/list', pathMatch: 'full'},

  { path: 'product/list', component: ListComponent },

  { path: 'product/create', component: CreateComponent },

  { path: 'view-cart', component: ViewCartComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
