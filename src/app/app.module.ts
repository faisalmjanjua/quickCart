import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ShoppingComponent } from './component/shopping/shopping.component';
import { ProductsComponent } from './component/shopping/products/products.component';
import { CartComponent } from './component/shopping/cart/cart.component';
import { CartItemComponent } from './component/shopping/cart/cart-item/cart-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ItemComponent } from './component/shopping/products/item/item.component';
import { WishListService } from './shared/wish-list.service';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingComponent,
    ProductsComponent,
    ItemComponent,
    CartComponent,
    CartItemComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule,
  ],
  providers: [WishListService],
  bootstrap: [AppComponent],
})
export class AppModule {}
