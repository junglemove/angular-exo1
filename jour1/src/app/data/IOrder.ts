import {IProduct} from './IProduct'

export interface IOrder{
    name:string;
    product:IProduct[];

    getPrice():number;
    onServed(isReady:boolean);
}