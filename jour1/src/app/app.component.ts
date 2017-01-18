import { Component } from '@angular/core';
import { IOrder } from './data/IOrder';
import { Order } from './data/Order';
import { IProduct } from './data/IProduct';
import { Product } from './data/Product';
import { Restaurant } from './data/Restaurant';
import { Store } from './data/Store';

var store:Store = new Store();
var oneRestaurant = new Restaurant(store);
var oneOrder = new Order();
var products:Product[] = [
  new Product(1, "Steack", 15),
  new Product(2, "Cheese burger", 13),
  new Product(3, "Frites", 3)
]

for(let i=0; i<products.length; i++){
  console.log("Name:"+ products[i].name +",Price:"+products[i].price);
}




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
