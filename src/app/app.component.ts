import { Component } from '@angular/core';
import { CartService} from './cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	cartItem: number=5;
	constructor(private cartservice: CartService){
	}
	ngOnInit() {
		this.cartitems();
		console.log("now value is"+this.cartItem);
	}


	cartitems(): void{
		let nmbr: number;
		this.cartItem=this.cartservice.totalcount()
	}
}
