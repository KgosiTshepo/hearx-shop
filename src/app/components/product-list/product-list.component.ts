import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'app-product-list',
	templateUrl: './product-list.component.html',
	styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
	@Input('products') products: any[];
	@Input('productsOfCart') productsOfCart: any[];
	@Output('productAdded') productAdded = new EventEmitter();
	@Output('productRemoved') productRemoved = new EventEmitter();

	public priceSort: String = "Asc";
	public NameSort: String = "Asc";

	constructor() { }

	ngOnInit() {
		console.log(this.products);
	}

	public addProductToCart = (product) => {
		this.productAdded.emit(product);
	};

	public removeProduct = (product) => {
		this.productRemoved.emit(product);
	};

	// public sortTableName = () => {
	// 	if (this.NameSort == "Asc") {
	// 		this.products.sort((a, b) => a.name.localeCompare(b.name));
	// 		this.NameSort = "Desc";
	// 	} else if (this.NameSort == "Desc") {
	// 		this.products.sort((a, b) => b.name.localeCompare(a.name));
	// 		this.NameSort = "Asc";
	// 	}
	// };

	// public sortTablePrice = () => {
	// 	if (this.priceSort == "Asc") {
	// 		this.products.sort((a, b) => (a.price > b.price) ? 1 : -1);
	// 		this.priceSort = "Desc";
	// 	} else if (this.priceSort == "Desc") {
	// 		this.products.sort((a, b) => (a.price < b.price) ? 1 : -1);
	// 		this.priceSort = "Asc";
	// 	}
	// };
}
