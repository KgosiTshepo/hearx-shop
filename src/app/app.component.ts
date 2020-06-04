import { Component } from '@angular/core';
import { initialProductList } from './utils/data';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'hearx-shop';

	public productList: any[] = initialProductList;
	public shoppingCartList: any[] = JSON.parse(localStorage.getItem("cart_items"));

	constructor(

	) { }

	public addProductToCart = (product) => {
		const productExistInCart = this.shoppingCartList.find(({ name }) => name === product.name);
		if (!productExistInCart) {
			this.shoppingCartList.push({ ...product, quantity: 1 });
			return;
		}
		productExistInCart.quantity += 1;
	};

	public removeProductFromCart = (product) => {
		const productExistInCart = this.shoppingCartList.find(({ name }) => name === product.name);
		if (productExistInCart) {
			this.shoppingCartList.push({ ...product, quantity: productExistInCart.quantity });
			return;
		}
		productExistInCart.quantity -= 1;
	};

	public removeProduct = (product) => {
		this.shoppingCartList = this.shoppingCartList.filter(({ name }) => name !== product.name);
	};

}
