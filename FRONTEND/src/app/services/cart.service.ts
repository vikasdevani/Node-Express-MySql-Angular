import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {


  private _products: Product[] = [];

  constructor() {

    this._products = JSON.parse(sessionStorage.getItem('products') ||'[]'); // get the data at lunch 
  }

  remove(product:Product) {
    const index = this._products.indexOf(product);
    this._products.splice(index,1);
    this.syncItems();
  }

  add(product:Product) { 
     this._products.push(product);
     this.syncItems();
  }

  get length() : number{
    return this._products.length
  }

  get products(){
    return this._products.slice(0)
  }

  syncItems(){
    sessionStorage.setItem('products',JSON.stringify(this._products)); // sync the data
  }
}
