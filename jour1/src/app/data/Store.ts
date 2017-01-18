import {Bankable} from './Bankable'
import {IProduct} from './IProduct'
//
export class Store{

    products:IProduct[]; 

    addProduct(newProduct:IProduct[]){
        this.products = newProduct
    }

    getProduct(id:string, client:Bankable):IProduct{
        let theProduct = this.products.find(x=>x.id === id)

        return theProduct;
    }

}