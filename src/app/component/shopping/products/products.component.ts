import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/models/products';
import { ProductsService } from 'src/app/shared/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  productList: Products[] = [];

  constructor(private prodSrv: ProductsService) {}

  ngOnInit(): void {
    this.productList = this.prodSrv.getAllProducts();
  }
}
