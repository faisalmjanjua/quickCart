import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/models/products';
import { ProductsService } from 'src/app/shared/products.service';
import { WishListService } from 'src/app/shared/wish-list.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  productList: Products[] = [];
  wishList: number[] = [];

  constructor(
    private prodSrv: ProductsService,
    private wishListSrv: WishListService
  ) {}

  ngOnInit(): void {
    this.prodSrv.getAllProducts().subscribe((product) => {
      this.productList = product;
      console.log(this.productList, "r")
    });
    this.loadWishList();
  }

  loadWishList(){
    this.wishListSrv.getAllWishItem().subscribe(ids=>{
      this.wishList = ids;
    })
  }
}
