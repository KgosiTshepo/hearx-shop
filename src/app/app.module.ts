import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CartProductComponent } from './components/cart-product/cart-product.component';
import { enableAkitaProdMode } from '@datorama/akita';
import { environment } from '../environments/environment';

if (environment.production) {
	enableAkitaProdMode();
}

@NgModule({
	declarations: [
		AppComponent,
		ProductComponent,
		ProductListComponent,
		CartProductComponent,
		ShoppingCartComponent,
		NavbarComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
