import { ID } from '@datorama/akita';

export interface Product {
    id: ID;
    image: String;
    name: String;
    price: String;
}

export function createProduct({

}: Partial<Product>): Product {
    return {

    } as Product;
}