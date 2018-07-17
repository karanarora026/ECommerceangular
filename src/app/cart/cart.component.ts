import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Product } from '../product';
import {CartService} from '../cart.service';
import { Cart} from '../cart';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cartservice: CartService,private route: ActivatedRoute,private router: Router) { }
  
  cartProducts: Cart[]=[];
  isDelete:boolean=false;
  
  ngOnInit() {
  	this.cartProducts=this.getProducts();
  }
  getProducts(): Cart[]{
 		this.cartservice.get().subscribe((n:Cart[]) => {
			this.cartProducts = n;
    });
    return this.cartProducts;
  }
  tprice(): number{
  	return this.cartProducts.reduce(function (acc, obj) { return acc + parseInt(obj.price.substr(2),10); }, 0); 
  }
  cartDelete(product): boolean{
     this.cartservice.delete(product).subscribe(n => {
       this.isDelete=n;
       this.getProducts();
      
        
    });
     return true;
  }

}
