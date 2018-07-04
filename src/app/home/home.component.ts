import { Component, OnInit } from '@angular/core';
import { ProductService } from'../product.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
	
  constructor(public productService: ProductService) { }

  ngOnInit() {
  }
  products:any;
  getproducts(): void {
  		this.productService.getProducts()
      	.subscribe(products => this.products= products);
      	console.log(this.products);
}


}
