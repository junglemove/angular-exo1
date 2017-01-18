import {IProduct} from './IProduct'

export class Product implements IProduct{

	//identifiant unique du type de produit
	id: string
	//nom du produit
	name: string
	//prix du produit
	price: number

	constructor(id:number, name:string, price:number){
		this.id = 1;
		this.name= "Thibaut";
		this.price = "15;
	}

	//Multiple constructor not allowed
	/*constructor(){
		this.id = 1;
		this.name= "Default";
		this.price = "15;
	}*/
	
}