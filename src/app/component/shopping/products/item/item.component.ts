import { Component, Input, OnInit } from '@angular/core';
import { Products } from 'src/app/models/products';
import { CartService } from 'src/app/shared/cart.service';

import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { WishListService } from 'src/app/shared/wish-list.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @Input() productItem: Products;
  like = faHeart;
  liked = faCheck;
  addToWishList: boolean = false;

  constructor(
    private _cartSrv: CartService,
    private wishlistSrv: WishListService
  ) {}

  ngOnInit(): void {}
  
  handleAddToWishList() {
    this.wishlistSrv.addWishItem(this.productItem.id).subscribe((x) => {
      console.log(x,"a")
      this.addToWishList = true;
    });
  }
  handleRemoveFromWishList() {
    this.wishlistSrv.delWishItem(this.productItem.id).subscribe((x) => {
      console.log(x,"r")
      this.addToWishList = false;
    });
  }
}
