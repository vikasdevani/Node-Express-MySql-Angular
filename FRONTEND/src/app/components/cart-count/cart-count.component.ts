import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-count',
  templateUrl: './cart-count.component.html',
  styleUrls: ['./cart-count.component.css']
})
export class CartCountComponent implements OnInit {
  constructor(private cartServ: CartService) {}

  ngOnInit() {
  }

  get count(){
    return this.cartServ.products.length
  }

}
