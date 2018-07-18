import { Injectable } from '@angular/core';
import { Product } from './product';
import { Observable, of } from 'rxjs';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

	getProductsByCategory(category): Observable<Product[]>{
		return this.http.get<Product[]>('http://localhost:3000/'+category);
		// return of(PRODUCTS[category]);
	}
	getProductById(category,id): Observable<Product>{
		return this.http.get<Product>('http://localhost:3000/'+category+'/'+id);

	}

}
