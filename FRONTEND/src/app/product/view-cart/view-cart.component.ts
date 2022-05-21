import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Product } from '../../models/product';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.css']
})
export class ViewCartComponent implements OnInit {
  products: Product[]=[]
  constructor(private cartServ: CartService) {}

  ngOnInit() {
    this.products = [...new Map(this.cartServ.products.map((item) => [item["id"], item])).values()];
  }
  cartUpdate($event:any){
    console.log($event);
    this.products = [...new Map(this.cartServ.products.map((item) => [item["id"], item])).values()];
  }
}
