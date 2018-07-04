import { Injectable } from '@angular/core';
import { Product } from './product';
import { PRODUCTS } from './mock-products';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Observable<any> {
  return of(PRODUCTS);
}
	getProductsByCategory(category): Observable<Product[]>{
		return of(PRODUCTS[category]);
	}
	getProductById(category,id): Observable<Product>{
		// console.log(category);
		var b = PRODUCTS[category].filter(function (temp) {
  			return temp.uniqueId == id;
});
		return of(b);

	}

}
