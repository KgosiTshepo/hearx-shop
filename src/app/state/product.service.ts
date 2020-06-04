import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { DataService } from '../utils/data.service';
import { Product } from './product.model';
import { ProductQuery } from './product.query';
import { ProductStore } from './product.store';

@Injectable({
	providedIn: 'root'
})
export class ProductService {

	constructor(
		private dataService: DataService,
		private productStore: ProductStore,
		private productQuery: ProductQuery
	) { }

	getProducts(): Observable<Array<Product>> {
		const response = this.dataService.getProducts().pipe(
			tap(s => this.productStore.set(s))
		);
		return this.productQuery ? response : of();
	}

	deleteProduct(id: ID) {
		this.productStore.remove(id);
	}

	updateProduct(id: any, product: Partial<Product>) {
		this.productStore.update(id, product);
	}

}
