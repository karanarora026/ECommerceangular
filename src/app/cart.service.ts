import { Injectable } from '@angular/core';
import { Cart } from './cart';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartProducts:Cart[]=[];
  cartItems:number;

  constructor(private http: HttpClient) { } 

   totalcount(): Observable<number>{        
    return this.http.get<number>('http://localhost:3000/cart/count');
  };

  cartnmbr(): number{
    if(this.cartItems == null){
    this.totalcount().subscribe(number=>{
			this.cartItems=number;
    });
    }
    return this.cartItems;
  }

  get(): Observable<Cart[]>{
   return this.http.get<Cart[]>('http://localhost:3000/cart');
  };

  set(product,category): any{  
    let headers =  {headers: new  HttpHeaders({ 'Content-Type': 'application/json'})};
    this.cartItems++;
    let temp={"name":product.name,"price":product.price,"description":product.description,"image":product.image,"Department":category}
    return this.http.post('http://localhost:3000/cart/save',temp,headers).subscribe();
  };    



  delete(product): Observable<boolean>{
    this.cartItems--;
    return this.http.delete<boolean>('http://localhost:3000/cart/delete/'+product._id);
    
  };
}
