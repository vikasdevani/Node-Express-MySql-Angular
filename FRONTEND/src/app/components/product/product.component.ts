import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product!: Product;
  @Output() cartUpdated = new EventEmitter();

 
  constructor(private cartServ: CartService) {}
  ngOnInit() {
    
  }

  get count() {
    return this.cartServ.products.filter(i => i.id == this.product.id).length;
  }
  add() {
    this.cartServ.add(this.product)
    this.cartUpdated.emit(this.cartServ.products);
  }

  remove() {
    if (this.count > 0) {
      this.cartServ.remove(this.product)
    }
    this.cartUpdated.emit(this.cartServ.products);
  }
}
