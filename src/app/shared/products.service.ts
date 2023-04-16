import { Injectable } from '@angular/core';
import { Products } from '../models/products';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products: Products[] = [
    new Products(
      1,
      'Cedarwood',
      'Cedarwood Oil excellent in aroma therapy becaues it remains',
      5,
      'plastic',
      52.99,
      0,
      10,
      'assets/prod1.png'
    ),
    new Products(
      1,
      'Lavender',
      'Lavender essential oil is perfect for your bath or shower',
      5,
      'plastic',
      52.99,
      0,
      10,
      'assets/prod1.png'
    ),
    new Products(
      1,
      'Vetiver',
      'Effect on both the mind and the skin when used in a aromatherpy',
      5,
      'plastic',
      52.99,
      0,
      10,
      'assets/prod1.png'
    ),
  ];

  constructor() {}

  getAllProducts() {
    return this.products;
  }
}
