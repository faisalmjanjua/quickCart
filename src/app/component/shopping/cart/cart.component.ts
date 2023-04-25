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

  subTotal = 0;
  grantTotal = 0;
  totalQuantity = 0;
  deliveryCharges: number = 5;
  discount = 0;
  totalDiscount = 0;

  constructor(private cartSrv: CartService) {}

  ngOnInit(): void {
    this.cartSrv.getProduct().subscribe((item: any) => {
      this.getProduct(item);
    });
  }

  getProduct(item) {
    let itemExists = false;

    for (let i in this.productItem) {
      if (this.productItem[i].id === item.id) {
        this.productItem[i].qty++;
        itemExists = true;
        break;
      }
    }

    if (!itemExists) {
      this.productItem.push(item);
    }

    this.subTotal = 0;
    this.grantTotal = 0;
    this.discount = 0;
    this.totalDiscount = 0;
    this.totalQuantity = 0;

    this.productItem.forEach((element) => {
      this.totalQuantity += element.qty;
      this.subTotal += element.qty * element.price;

      if (this.totalQuantity > 2) {
        this.discount = 3;
        this.totalDiscount = (this.discount / 100) * this.subTotal;
      }
      this.grantTotal =
        this.subTotal - this.totalDiscount + this.deliveryCharges;
    });
  }
}
