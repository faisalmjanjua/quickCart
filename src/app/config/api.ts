import { environment } from 'src/environments/environment';

export const basseUrl = environment.production
  ? 'http://localhost:3000'
  : 'http://localhost:3000';

export const productsUrl = basseUrl + '/products';
export const cartUrl = basseUrl + '/carts';
export const wishListUrl = 'http://localhost:3000/wishList';
