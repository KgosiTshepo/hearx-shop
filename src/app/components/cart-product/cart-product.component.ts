import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'app-cart-product',
	templateUrl: './cart-product.component.html',
	styleUrls: ['./cart-product.component.scss']
})
export class CartProductComponent {
	@Input('product') product: any;
	@Output('product') productRemoved = new EventEmitter();

	constructor() { }

	public modelChanged = () => {
		if (this.product.quantity === 0) {
			this.productRemoved.emit(this.product);
		}
	};
}
