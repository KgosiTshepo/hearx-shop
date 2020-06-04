import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

export interface ProductState extends EntityState<Product> { }

@Injectable({
    providedIn: 'root'
})
@StoreConfig({
    name: 'products'
})
export class ProductStore extends EntityStore<ProductState, Product> {
    constructor() {
        super();
    }
}