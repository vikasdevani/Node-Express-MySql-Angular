import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  form: FormGroup;

  constructor(
    public productService: ProductService,
    private router: Router
  ) {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required,Validators.maxLength(50)]),
      price: new FormControl('', [Validators.required,Validators.max(9999999)]),
      image: new FormControl('', [Validators.required])
    });
  }
     
  ngOnInit(): void {
    
  }
     
  /**
   * Write code on Method
   *
   * @return response()
   */
  get f(){
    return this.form.controls;
  }
  
  onFileSelect(event:any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.form.get('image')!.setValue(file);
    }
  }
  
  /**
   * Write code on Method
   *
   * @return response()
   */
  submit(){
    const formData = new FormData();
    formData.append('name', this.form.get('name')!.value);
    formData.append('price', this.form.get('price')!.value);
    formData.append('image', this.form.get('image')!.value);
    this.productService.create(formData).subscribe((res:any) => {
         console.log('product created successfully!');
         this.router.navigateByUrl('product/list');
    })
  }
}
