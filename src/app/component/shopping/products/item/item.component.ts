import { Component, Input, OnInit } from '@angular/core';
import { Products } from 'src/app/models/products';
import { CartService } from 'src/app/shared/cart.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @Input() productItem: Products;

  constructor(private cartSrv: CartService) {}

  ngOnInit(): void {}

  addToCart(product) {
    this.cartSrv.setProduct(this.productItem);
  }
}
