import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product';
import {ProductService} from '../product.service';
import { Location } from '@angular/common';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';




@Component({
	selector: 'app-products',
	templateUrl: './products.component.html',
	styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
	@Input() productType:string;
	@Input() occurance:number;
	products :Observable<Product[]>; 

	constructor(private productservice: ProductService,private route: ActivatedRoute,private router: Router) { }

	ngOnInit() {
		this.getProducts();
	}

	getProducts(): void {
		console.log(this.route.snapshot.paramMap.get('category'));
		if(this.productType===undefined)
		{
		this.products = this.route.paramMap.pipe(
			switchMap((params: ParamMap) =>
				{   this.productType = params.get('category')
					return this.productservice.getProductsByCategory(params.get('category'))
				}
				)
			);
		}
		else{
		this.products=this.productservice.getProductsByCategory(this.productType);
		}
		if(this.occurance===undefined){this.products.subscribe(products => {
			this.occurance = products.length;
		})}
		//console.log(this.occurance);
	}

}
