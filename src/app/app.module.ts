import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ShoppingComponent } from './component/shopping/shopping.component';
import { ProductsComponent } from './component/shopping/products/products.component';
import { ItemComponent } from './component/shopping/products/item/item.component';
import { CartComponent } from './component/shopping/cart/cart.component';
import { CartItemComponent } from './component/shopping/cart/cart-item/cart-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingComponent,
    ProductsComponent,
    ItemComponent,
    CartComponent,
    CartItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
