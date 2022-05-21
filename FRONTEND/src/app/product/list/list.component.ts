import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  products: Product[]= [];  
  page = 0;
  limit = 10;
  totalPages = 1;
  constructor(public productService: ProductService) { }
  
  ngOnInit(): void {
    this.fetchData();
  }
  onScrollDown() {
    this.page++;
    this.fetchData();
  }
  fetchData(){
    if(this.page < this.totalPages){
      this.productService.getAll(this.page, this.limit).subscribe((data:any) =>{
        this.totalPages = data.totalPages;
        data.products.map((obj:any) => {
          this.products.push(obj);
        })
      });
    }    
  }
}