import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { wishListUrl } from 'src/app/config/api';

@Injectable({
  providedIn: 'root',
})
export class WishListService {
  wishList: any[] = [];

  constructor(private _http: HttpClient) {}

  getAllWishItem() {
    return this._http.get(wishListUrl).pipe(
      map((result:any) => {
        let productIds = [];

        result.forEach((item) => {
          console.log(item, 'w item')
          // productIds.push(item);
        });

        return productIds;
      })
    );
  }

  addWishItem(productId): Observable<any> {
    return this._http.post(wishListUrl, { id: productId });
  }

  delWishItem(productId) {
    return this._http.delete(wishListUrl + '/' + productId);
  }
}
