import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
import { Product } from '../product';
import {ProductService} from '../product.service';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private productservice: ProductService,private cartservice: CartService,private route: ActivatedRoute,private router: Router) { }
  	product : Product; 
  	productType: string;
  	productId: string;
  	clicked : boolean=false;

ngOnInit() {
		this.getProduct();

	}

	getProduct(): void {
		this.route.paramMap.pipe(
			switchMap((params: ParamMap) =>
				{   this.productType = params.get('category')
					this.productId=params.get('id');
					return this.productservice.getProductById(this.productType,this.productId)
				}
				)
			).subscribe(product => {
				this.product = product;
				console.log(this.product);
				});
		}

	cartAdd(product): void{
		console.log(product)
		var a= this.cartservice.set(product,this.productType)
		console.log("return"+ a)
		this.clicked=true;
	}

}
