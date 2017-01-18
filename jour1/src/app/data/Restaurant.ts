import {Bankable} from './Bankable';
import {Store} from './Store';
import {IOrder} from './IOrder';
export class Restaurant extends Bankable{
	private store:Store;
	private order:IOrder;

	constructor(oneStore:Store){
		super(1,1000);
		this.store = oneStore;
	}

	public passOrder(order:IOrder){
		this.order = order;
	}

	get total():number{
		return this.total;
	}

}