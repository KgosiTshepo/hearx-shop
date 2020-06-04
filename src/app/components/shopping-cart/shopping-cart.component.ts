import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-shopping-cart',
	templateUrl: './shopping-cart.component.html',
	styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
	@Input() products: any[];
	@Output() productRemoved = new EventEmitter();

	public counter: number = 3600;

	constructor() { }

	ngOnInit() {
		this.startTimer();
	}

	public numberOfProductsInCart() {
		this.persistCartToLocalStorage(this.products);
		return this.products.reduce((acc, prod) => acc += prod.quantity, 0);
	}

	public removeProduct(product) {
		this.productRemoved.emit(product);
	};

	public persistCartToLocalStorage(Data: any) {
		if (this.counter > 0) {
			localStorage.setItem("cart-items", JSON.stringify(Data));
		}
	}

	public startTimer() {
		let intervalId = setInterval(() => {
			this.counter = this.counter - 1;
			if (this.counter === 0) clearInterval(intervalId);
			localStorage.setItem("cart-items", JSON.stringify([]));
		}, 1000);
	}
}
