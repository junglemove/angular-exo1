import {Bankable} from './Bankable';
import {Store} from './Store';
import {IOrder} from './IOrder';
export class Restaurant extends Bankable{
	private oneStore:Store;

	constructor(oneStore:Store){
		super(1,1000);
	}

	public passOrder(order:IOrder){

	}

	get total():number{
		return 0;
	}

}