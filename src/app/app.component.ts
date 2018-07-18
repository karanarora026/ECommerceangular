import { Component } from '@angular/core';
import { CartService} from './cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	cartItem: number
	constructor(private cartservice: CartService){
	}
	ngOnInit() {
	}


	cartitems(): number{
		// this.cartservice.totalcount().subscribe(number=>{
		// 	this.cartItem=number;
		// });
		return this.cartservice.cartnmbr();
	}
}
