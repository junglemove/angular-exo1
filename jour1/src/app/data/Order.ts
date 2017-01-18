import {IOrder} from './IOrder'
import {IProduct} from './IProduct'

export class Order implements IOrder{
    name:string;
    product:IProduct[];

    getPrice(){
        return this.product[0].price;
    }

    onServed(isReady:boolean){
        
    }

}