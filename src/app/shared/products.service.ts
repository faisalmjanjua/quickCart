import { Injectable } from '@angular/core';
import { Products } from '../models/products';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { productsUrl } from '../config/api';

const apiUrl = 'http://localhost:3000/products';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products: Products[] = [
    // new Products(
    //   1,
    //   'Cedarwood',
    //   'Cedarwood Oil excellent in aroma therapy becaues it remains',
    //   5,
    //   'plastic',
    //   52.99,
    //   0,
    //   1,
    //   'assets/cedarwood.png'
    // ),
    // new Products(
    //   2,
    //   'Lavender',
    //   'Lavender essential oil is perfect for your bath or shower',
    //   5,
    //   'plastic',
    //   52.99,
    //   0,
    //   1,
    //   'assets/lavender.png'
    // ),
    // new Products(
    //   3,
    //   'Vetiver',
    //   'Effect on both the mind and the skin when used in a aromatherpy',
    //   5,
    //   'plastic',
    //   52.99,
    //   0,
    //   1,
    //   'assets/vetiver.png'
    // ),
    // new Products(
    //   4,
    //   'Jasmine',
    //   'Jasmine essential oil has been used for centuries in the form of perfume ',
    //   5,
    //   'plastic',
    //   52.99,
    //   0,
    //   1,
    //   'assets/jasmine.png'
    // ),
    // new Products(
    //   5,
    //   'Gardenia',
    //   'Gardenia essential oil is primarily used as fragrance.',
    //   5,
    //   'plastic',
    //   52.99,
    //   0,
    //   1,
    //   'assets/gardenia.png'
    // ),
    // new Products(
    //   6,
    //   'Chamonile',
    //   'THe chamomile roman essential oil also referred to as Roman.',
    //   5,
    //   'plastic',
    //   52.99,
    //   0,
    //   1,
    //   'assets/chamonile.png'
    // ),
    // new Products(
    //   7,
    //   'Peppermin',
    //   'Peppermint essential oil is known for its ability to calm the mind, body.',
    //   5,
    //   'plastic',
    //   52.99,
    //   0,
    //   1,
    //   'assets/peppermin.png'
    // ),
    // new Products(
    //   8,
    //   'Lemon',
    //   'The citrus lemon essential oil has a myriad of uses. It can be used.',
    //   5,
    //   'plastic',
    //   52.99,
    //   0,
    //   1,
    //   'assets/lemon.png'
    // ),
    // new Products(
    //   9,
    //   'Bergamot',
    //   'The oil obtained from its peel gives it a fresh aroma with hints of grapefruit.',
    //   5,
    //   'plastic',
    //   52.99,
    //   0,
    //   1,
    //   'assets/bergamot.png'
    // ),
  ];

  constructor(private _http: HttpClient) {}

  getAllProducts(): Observable<Products[]> {
    // return this.products;
    return this._http.get<Products[]>(productsUrl);
  }

  
}
