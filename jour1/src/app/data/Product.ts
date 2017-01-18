import {IProduct} from './IProduct'

export class Product implements IProduct{

	//identifiant unique du type de produit
	id: number
	//nom du produit
	name: string
	//prix du produit
	price: number

	constructor(id:number, name:string, price:number){
		this.id = id;
		this.name= name;
		this.price = price;
	}

	//Multiple constructor not allowed
	/*constructor(){
		this.id = 1;
		this.name= "Default";
		this.price = "15;
	}*/
	
}