import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../../../../models/product.model';
import {ActionEvent, ProductActionEvents} from '../../../../state/product.state';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.css']
})
export class ProductListItemComponent implements OnInit {

  @Input() product: Product;
  @Output() productEventEmitter: EventEmitter<ActionEvent> = new EventEmitter<ActionEvent>();

  constructor() { }

  ngOnInit() {
  }

  onSelect(product: Product) {
    this.productEventEmitter.emit({type: ProductActionEvents.SELECT_PRODUCT, payload: product});
  }

  onDelete(product: Product) {
    this.productEventEmitter.emit({type: ProductActionEvents.DELETE_PRODUCT, payload: product});
  }

  onEdit(product: Product) {
    this.productEventEmitter.emit({type: ProductActionEvents.EDIT_PRODUCT, payload: product});
  }
}