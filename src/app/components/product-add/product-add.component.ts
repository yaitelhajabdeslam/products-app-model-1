import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Product} from '../../models/product.model';
import {ProductsService} from '../../services/products.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  productFormGroup?: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private productsService: ProductsService) { }

  ngOnInit() {
    this.productFormGroup = this.fb.group({
      name: ['', Validators.required],
      price: [0, Validators.required],
      quantity: [0, Validators.required],
      selected: [true, Validators.required],
      available: [true, Validators.required]
    });
  }

  onSave() {
    this.submitted = true;
    if (this.productFormGroup.invalid) { return; }
    this.productsService.saveProduct(this.productFormGroup.value).subscribe(data => {
      alert('Success saving product');
    });
  }
}
