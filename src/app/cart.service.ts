import { Injectable } from '@angular/core';
import { Cart } from './cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

	cartProducts:Cart[]=[];

  constructor() { }

   totalcount(): number{        
       return this.cartProducts.length;
  };

  get(): Cart[]{
    return this.cartProducts;
  };

  set(product,category): boolean{  
  	console.log(product)
  	product['department']=category;
    this.cartProducts.push(product);
    console.log(this.cartProducts);
    return true;
  };

  delete(product): Cart[]{
    this.cartProducts = this.cartProducts.filter(function(el) {
    return el.uniqueId !== product.uniqueId;
    });
    console.log(this.cartProducts);
    return this.cartProducts;
  };
}
