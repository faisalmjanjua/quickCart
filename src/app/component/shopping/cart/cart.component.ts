import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/models/products';
import { CartService } from 'src/app/shared/cart.service';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  productItem: Products[] = [];
  del = faTimes;

  constructor(private cartSrv: CartService) {}

  ngOnInit(): void {
    this.getProduct();
  }
  
  getProduct() {
    this.cartSrv.getProduct().subscribe((x: any) => {
      this.productItem.push(x);
      console.log(this.productItem, 'cartss');
    });
  }
}
