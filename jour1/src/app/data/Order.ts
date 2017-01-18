import {IOrder} from './IOrder'
import {IProduct} from './IProduct'

export class Order implements IOrder{
    name:string;
    product:IProduct[];

    getPrice(){
        let sum = 0;
        for(let i = 0; i<this.product.length;i++){
            sum += this.product[i].price;
        }
        return sum;
    }

    onServed(isReady:boolean){

    }

}