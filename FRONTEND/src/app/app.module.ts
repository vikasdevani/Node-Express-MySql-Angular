import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ProductModule } from './product/product.module';
import { AppRoutingModule } from './app-routing.module';
import { CartCountComponent } from './components/cart-count/cart-count.component';

@NgModule({
  declarations: [
    AppComponent,
    CartCountComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    ProductModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
