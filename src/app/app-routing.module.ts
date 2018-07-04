import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent }  from './home/home.component';
import { ProductsComponent }  from './products/products.component';
import { ProductComponent }  from './product/product.component';
import { CartComponent }  from './cart/cart.component';
	
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'home/:category', component: ProductsComponent },
  { path: 'home/:category/:id', component: ProductComponent },
    { path: 'cart', component: CartComponent }

];
 

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
   exports: [ RouterModule ]
})
export class AppRoutingModule { }
