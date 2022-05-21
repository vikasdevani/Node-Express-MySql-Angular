import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ViewCartComponent } from './view-cart/view-cart.component';
import { ProductComponent } from '../components/product/product.component';


@NgModule({
  declarations: [
    ListComponent,
    CreateComponent,
    ViewCartComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    InfiniteScrollModule
  ]
})
export class ProductModule { }
