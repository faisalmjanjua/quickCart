import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  subject = new Subject();

  constructor() {}

  setProduct(product) {
    this.subject.next(product);
  }

  getProduct() {
    return this.subject.asObservable();
  }
}
